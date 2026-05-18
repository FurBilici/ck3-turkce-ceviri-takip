import { ModCard, Progress } from "./components";
import { formatDate, formatNumber, getStatus } from "./data";

export default async function Home() {
  const status = await getStatus();
  const summary = status.summary;

  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow">Crusader Kings III Türkçe mod çevirileri</div>
          <h1>CK3AI çeviri ilerleme panosu</h1>
          <p className="lead">
            Modların çeviri durumu, dosya bazlı ilerleme, token kontrol uyarıları ve Steam Workshop bağlantıları
            burada herkese açık metadata olarak yayınlanır.
          </p>
        </div>
        <div className="detail-panel">
          <p className="muted">Genel ilerleme</p>
          <h2>{summary.percent}%</h2>
          <Progress value={summary.percent} />
          <p className="muted">Son güncelleme: {formatDate(status.updated_at)}</p>
        </div>
      </section>

      <section className="stats" aria-label="Genel özet">
        <div className="stat">
          <strong>{formatNumber(summary.mods_total)}</strong>
          <span>Mod</span>
        </div>
        <div className="stat">
          <strong>{formatNumber(summary.mods_completed)}</strong>
          <span>Tamamlandı</span>
        </div>
        <div className="stat">
          <strong>{formatNumber(summary.mods_translating)}</strong>
          <span>Çevriliyor</span>
        </div>
        <div className="stat">
          <strong>{formatNumber(summary.token_errors)}</strong>
          <span>Token kontrol uyarısı</span>
        </div>
      </section>

      <section>
        <h2>Modlar</h2>
        <div className="grid">
          {status.projects.map((project) => (
            <ModCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
