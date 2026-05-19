import { notFound } from "next/navigation";
import { Progress, StatusBadge } from "../../components";
import { formatDate, formatNumber, getStatus } from "../../data";

export async function generateStaticParams() {
  const status = await getStatus();
  return status.projects.map((project) => ({ id: project.id }));
}

export default async function ModDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const status = await getStatus();
  const project = status.projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow">Mod detayı</div>
          <h1>{project.name}</h1>
          <p className="lead">
            {project.description || "Bu mod için public registry açıklaması henüz eklenmedi."}
          </p>
          {project.public_note ? <p className="notice compact">{project.public_note}</p> : null}
          <div className="meta hero-meta">
            <span>{project.category || "Kategori belirtilmedi"}</span>
            <span>Workshop ID: {project.workshop_id || "Yok"}</span>
          </div>
        </div>
        <div className="detail-panel">
          <StatusBadge status={project.status} tokenErrors={project.token_errors} />
          <h2>{project.percent}%</h2>
          <Progress value={project.percent} />
          <div className="meta">
            <span>Son güncelleme: {formatDate(project.last_updated)}</span>
            <span>{formatNumber(project.token_errors)} token uyarısı</span>
          </div>
          {project.steam_url ? (
            <p style={{ marginTop: 16 }}>
              <a className="button" href={project.steam_url} rel="noreferrer" target="_blank">
                Steam Workshop
              </a>
            </p>
          ) : null}
        </div>
      </section>

      <section className="detail-grid">
        {project.show_files === false ? (
          <div className="notice">Dosya detayları henüz paylaşılmıyor.</div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Dosya</th>
                  <th>Durum</th>
                  <th>İlerleme</th>
                  <th>Satır</th>
                  <th>Boş</th>
                  <th>Token hatası</th>
                </tr>
              </thead>
              <tbody>
                {project.files.map((file) => (
                  <tr className={file.token_errors > 0 ? "row-warning" : undefined} key={file.filename}>
                    <td>{file.filename}</td>
                    <td>
                      <StatusBadge status={file.status} tokenErrors={file.token_errors} />
                    </td>
                    <td>
                      {file.percent}% <Progress value={file.percent} />
                    </td>
                    <td>
                      {formatNumber(file.rows_translated)} / {formatNumber(file.rows_total)}
                    </td>
                    <td>{formatNumber(file.empty_rows)}</td>
                    <td>{formatNumber(file.token_errors)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <aside className="detail-panel">
          <h3>Özet</h3>
          <p className="lead">
            {formatNumber(project.files_completed)} / {formatNumber(project.files_total)} dosya tamamlandı.
            Toplam {formatNumber(project.rows_total)} satırın {formatNumber(project.rows_translated)} satırı çevrildi.
          </p>
        </aside>
      </section>
    </>
  );
}
