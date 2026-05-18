import Link from "next/link";
import { formatNumber, statusLabels } from "./data";
import type { ProjectStatus, ProjectStatusRecord } from "./types";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className={`badge ${status}`}>{statusLabels[status]}</span>;
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
          <p className="muted">Workshop ID: {project.workshop_id || "Yok"}</p>
        </div>
        <StatusBadge status={project.status} />
      </div>
      <Progress value={project.percent} />
      <div className="meta">
        <span>{project.percent}%</span>
        <span>
          {formatNumber(project.rows_translated)} / {formatNumber(project.rows_total)} satır
        </span>
        <span>
          {formatNumber(project.files_completed)} / {formatNumber(project.files_total)} dosya
        </span>
        <span>{formatNumber(project.token_errors)} token hatası</span>
      </div>
    </article>
  );
}
