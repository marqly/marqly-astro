/**
 * Settings → Connected apps, reconstructed: the MCP server address and the
 * per-app rows (read-only by default, "Allow this app to change my library",
 * Revoke access). `editing` flips one app to "Can edit".
 * Presentational; the showcase pane drives the beat.
 */
import { FaviconTile } from './bits';
import { connectedApps, MCP_SERVER_URL } from './data';
import { CopyIcon } from './icons';

export function ConnectedAppsDemo({ editing = -1, className = '' }: { editing?: number; className?: string }) {
  return (
    <div className={`w-full max-w-[440px] rounded-3xl bg-white p-5 shadow-overlay ${className}`} aria-hidden>
      <p className="text-[14px] font-semibold text-foreground">Connected Apps</p>
      <p className="mt-0.5 text-[12px] text-muted">Connect an AI app (MCP)</p>
      <p className="mt-2 text-[12px] leading-relaxed text-muted">
        Use your library from Claude, ChatGPT, Cursor, VS Code or any MCP client. Paste the server address into
        the app; a Marqly sign-in screen opens the first time.
      </p>
      <p className="mt-3 text-[11px] font-medium text-foreground">Server address</p>
      <div className="mt-1 flex items-center gap-2 rounded-xl border border-separator bg-default/60 py-1.5 pr-1.5 pl-3">
        <code className="min-w-0 flex-1 truncate font-mono text-[11px] text-foreground">{MCP_SERVER_URL}</code>
        <span className="flex size-6 items-center justify-center rounded-md text-muted">
          <CopyIcon size={13} />
        </span>
      </div>
      <ul className="mt-3 flex flex-col gap-1.5">
        {connectedApps.slice(0, 3).map((app, i) => {
          const on = editing === i;
          return (
            <li key={app.name} className="flex items-center gap-2.5 rounded-xl border border-separator px-2.5 py-2">
              <FaviconTile domain={app.domain} size={18} />
              <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-foreground">{app.name}</span>
              <span
                className={`rounded-2xl px-1.5 py-px text-[10px] font-semibold transition-colors ${
                  on ? 'bg-[color:var(--warning)]/20 text-foreground' : 'bg-default text-muted'
                }`}
              >
                {on ? 'Can edit' : 'Read-only'}
              </span>
              <span
                className={`relative h-4 w-7 shrink-0 rounded-full transition-colors duration-200 ${on ? 'bg-accent' : 'bg-default'}`}
              >
                <span
                  className="absolute top-0.5 size-3 rounded-full bg-white shadow-surface transition-transform duration-200"
                  style={{ transform: on ? 'translateX(14px)' : 'translateX(2px)' }}
                />
              </span>
              <span className="text-[11px] text-muted">Revoke access</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-2.5 text-[11px] leading-snug text-muted">
        Allow this app to change my library — Off: it can search and read. On: it can also save, move, tag and
        delete.
      </p>
    </div>
  );
}
