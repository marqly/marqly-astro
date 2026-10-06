import fs from 'node:fs';
import path from 'node:path';

export const GSC_PULL_NAMES = [
  'query', 'page', 'query_page', 'country', 'device', 'date',
  'country_page', 'country_query', 'page_country_date',
];

const REPLACED_DATASET_FILES = [
  ...GSC_PULL_NAMES.map((name) => `${name}.csv`),
  'opportunities_pages.csv', 'opportunities_queries.csv', 'cannibalization.csv',
  'cannibalization-provenance.json', 'top3_nonbrand.txt', 'position-curve.json',
  'ghost_noise_queries.csv',
];

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function parseDate(value, label) {
  if (!ISO_DATE.test(String(value))) throw new Error(`${label} must be YYYY-MM-DD`);
  const parsed = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(parsed.valueOf()) || parsed.toISOString().slice(0, 10) !== value) {
    throw new Error(`${label} is not a valid calendar date`);
  }
  return parsed;
}

export function validateExplicitWindow(startDate, endDate) {
  const start = parseDate(startDate, '--start');
  const end = parseDate(endDate, '--end');
  if (start > end) throw new Error('--start must be on or before --end');
  return { startDate, endDate };
}

export function findManifestName(dir) {
  if (!fs.existsSync(dir)) return null;
  const matches = fs.readdirSync(dir).filter((name) => name.toLowerCase() === 'manifest.json');
  if (matches.length > 1) throw new Error(`multiple case-variant manifest files in ${dir}`);
  return matches[0] ?? null;
}

export function readManifest(dir) {
  const name = findManifestName(dir);
  if (!name) return null;
  return JSON.parse(fs.readFileSync(path.join(dir, name), 'utf8'));
}

function safeTimestamp(iso) {
  return iso.replaceAll(':', '-').replaceAll('.', '-');
}

function uniquePath(base) {
  if (!fs.existsSync(base)) return base;
  for (let i = 2; ; i++) {
    const candidate = `${base}-${i}`;
    if (!fs.existsSync(candidate)) return candidate;
  }
}

function copyDatasetEvidence(from, to) {
  const manifestName = findManifestName(from);
  const files = fs.readdirSync(from, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase() !== 'manifest.json')
    .map((entry) => entry.name);
  if (!manifestName && !files.length) return false;
  fs.mkdirSync(to, { recursive: true });
  if (manifestName) fs.copyFileSync(path.join(from, manifestName), path.join(to, 'MANIFEST.json'));
  for (const name of files) fs.copyFileSync(path.join(from, name), path.join(to, name));
  return true;
}

function writeDataset(dir, files, manifest) {
  for (const name of fs.readdirSync(dir)) {
    if (name.toLowerCase() === 'manifest.json' || REPLACED_DATASET_FILES.includes(name)) {
      fs.rmSync(path.join(dir, name), { force: true });
    }
  }
  for (const [name, contents] of Object.entries(files)) fs.writeFileSync(path.join(dir, `${name}.csv`), contents);
  fs.writeFileSync(path.join(dir, 'MANIFEST.json'), `${JSON.stringify(manifest, null, 2)}\n`);
}

// Build the complete replacement beside OUT, then swap directories. Any fetch or
// preparation failure occurs before the current dataset is touched.
export function publishDataset({ out, files, manifest }) {
  const parent = path.dirname(out);
  fs.mkdirSync(parent, { recursive: true });
  const stage = fs.mkdtempSync(path.join(parent, '.gsc-stage-'));
  const stamp = safeTimestamp(manifest.generatedAt);
  try {
    if (fs.existsSync(out)) fs.cpSync(out, stage, { recursive: true });

    if (fs.existsSync(out)) {
      const previous = uniquePath(path.join(stage, 'snapshots', `previous-before-${stamp}`));
      copyDatasetEvidence(out, previous);
    }

    writeDataset(stage, files, manifest);
    const successful = path.join(stage, 'snapshots', stamp);
    if (fs.existsSync(successful)) throw new Error(`snapshot already exists: ${successful}`);
    copyDatasetEvidence(stage, successful);

    const backup = uniquePath(path.join(parent, `.gsc-backup-${stamp}`));
    let movedOld = false;
    try {
      if (fs.existsSync(out)) {
        fs.renameSync(out, backup);
        movedOld = true;
      }
      fs.renameSync(stage, out);
      if (movedOld) fs.rmSync(backup, { recursive: true, force: true });
    } catch (error) {
      if (!fs.existsSync(out) && movedOld && fs.existsSync(backup)) fs.renameSync(backup, out);
      throw error;
    }
  } finally {
    fs.rmSync(stage, { recursive: true, force: true });
  }
}
