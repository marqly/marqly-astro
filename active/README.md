# /active — Claude Code Sandbox

This directory is the mandatory dump zone for anything generated during a
Claude Code session. See `../CLAUDE.md` and `~/.claude/CLAUDE.md` for the full rule.

## Structure

- `tmp/` — ephemeral scratch (gitignored). Scripts, CSVs, JSON dumps, one-offs. Safe to delete anytime.
- `logs/` — research outputs (gitignored). Consensus reports, debate transcripts, build-time measurements, auto-research logs.
- `scripts/` — migration tooling (tracked): `capture.mjs`, `diff.mjs`, `urls.json`.

## Rules

- Never dump generated files into the project root. Use `tmp/` or `logs/`.
- Ask Claude to "clean up /active" periodically to prune stale files.
- Files outside `tmp/` and `logs/` (like this README and `scripts/`) stay tracked in git.
