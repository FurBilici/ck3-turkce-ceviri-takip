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
            Dosya bazlı satır ilerlemesi ve token kontrol durumu. Bu sayfa çeviri metinlerini, promptları,
            local pathleri veya provider kullanım detaylarını yayınlamaz.
          </p>
        </div>
        <div className="detail-panel">
          <StatusBadge status={project.status} />
          <h2>{project.percent}%</h2>
          <Progress value={project.percent} />
          <div className="meta">
            <span>Son güncelleme: {formatDate(project.last_updated)}</span>
            <span>Workshop ID: {project.workshop_id || "Yok"}</span>
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
                <tr key={file.filename}>
                  <td>{file.filename}</td>
                  <td>
                    <StatusBadge status={file.status} />
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
