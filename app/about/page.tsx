export default function About() {
  return (
    <section className="about">
      <div className="eyebrow">Proje notu</div>
      <h1>CK3AI hakkında</h1>
      <p>
        CK3AI, Crusader Kings III mod localization dosyalarını Türkçeye çevirirken CK3 tokenlarını, anahtarlarını
        ve dosya yapısını korumaya odaklanan bir iş akışıdır.
      </p>
      <p>
        Çeviri yöntemi yapay zeka desteklidir: satırlar batch halinde çevrilir, token-safe masking ve doğrulama
        kontrollerinden geçirilir, ardından insan kontrolüyle düzenlenebilir. AI çıktısı final karar olarak kabul
        edilmez; token hataları ve kontrol gerektiren dosyalar ayrıca işaretlenir.
      </p>
      <p>
        Bu public site yalnızca ilerleme metadatası yayınlar. API key, prompt metni, raw AI output, local absolute
        path veya çeviri dosyalarının tam içeriği burada bulunmaz.
      </p>
    </section>
  );
}
