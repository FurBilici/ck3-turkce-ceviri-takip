import Link from "next/link";
import { formatNumber, statusLabels } from "./data";
import type { ProjectStatus, ProjectStatusRecord } from "./types";

export function StatusBadge({ status, tokenErrors = 0 }: { status: ProjectStatus; tokenErrors?: number }) {
  return (
    <span className={`badge ${status}`}>
      {statusLabels[status]}
      {status === "needs_review" && tokenErrors > 0 ? ` · ${formatNumber(tokenErrors)} token` : ""}
    </span>
  );
}

export function Progress({ value }: { value: number }) {
  const safe = Math.max(0, Math.min(100, value));
  return (
    <div className="progress" aria-label={`${safe}% ilerleme`}>
      <span style={{ "--value": `${safe}%` } as React.CSSProperties} />
    </div>
  );
}

export function ModCard({ project }: { project: ProjectStatusRecord }) {
  return (
    <article className="card">
      <div className="card-head">
        <div>
          <h3>
            <Link href={`/mods/${project.id}`}>{project.name}</Link>
          </h3>
          <p className="muted">{project.category || "Kategori belirtilmedi"}</p>
        </div>
        <StatusBadge status={project.status} tokenErrors={project.token_errors} />
      </div>
      <p className="card-description">
        {project.description || "Bu mod için public registry açıklaması henüz eklenmedi."}
      </p>
      <Progress value={project.percent} />
      <div className="meta">
        <span>{project.percent}%</span>
        <span>
          {formatNumber(project.rows_translated)} / {formatNumber(project.rows_total)} satır
        </span>
        <span>
          {formatNumber(project.files_completed)} / {formatNumber(project.files_total)} dosya
        </span>
        <span>{formatNumber(project.token_errors)} token uyarısı</span>
      </div>
      <div className="actions">
        {project.steam_url ? (
          <a className="button secondary" href={project.steam_url} rel="noreferrer" target="_blank">
            Steam Workshop
          </a>
        ) : null}
        <Link className="button" href={`/mods/${project.id}`}>
          Detaylar
        </Link>
      </div>
    </article>
  );
}
