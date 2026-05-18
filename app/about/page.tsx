export default function About() {
  return (
    <section className="about">
      <div className="eyebrow">Proje notu</div>
      <h1>Hakkında</h1>
      <h2>Bu proje nedir?</h2>
      <p>
        CK3 Türkçe Çeviri Takip Merkezi, Crusader Kings III mod çevirilerinin hangi aşamada olduğunu paylaşmak
        için hazırlanmış public ilerleme sayfasıdır. Burada yalnızca mod adı, açıklama, dosya sayısı, satır
        ilerlemesi ve kontrol uyarıları yer alır.
      </p>
      <h2>Çeviri yöntemi</h2>
      <p>
        CK3 localization satırları batch halinde işlenir. Sistem anahtarları, oyun içi tokenları ve biçimlendirme
        işaretlerini koruyarak taslak çeviri üretir; ardından satır ve dosya bazında doğrulama raporları oluşturur.
      </p>
      <h2>AI destekli, insan kontrolünde</h2>
      <p>
        Yapay zekâ çeviriyi hızlandırmak için kullanılır, final karar verici değildir. Token hatası bulunan dosyalar
        tamamlanmış görünse bile “Kontrol gerekiyor” olarak işaretlenir ve insan incelemesine ayrılır.
      </p>
      <h2>Steam Workshop bağlantıları</h2>
      <p>
        Mod kartlarındaki Steam Workshop bağlantıları ilgili mod sayfasına gider. Bu bağlantılar kullanıcıların hangi
        modun takip edildiğini kolayca doğrulaması için eklenmiştir.
      </p>
      <h2>Gizlilik ve güvenlik</h2>
      <p>
        Public JSON yalnızca güvenli metadata içerir. Çeviri metinleri, API anahtarları, promptlar, ham AI çıktıları,
        provider kullanım detayları ve yerel dosya yolları yayınlanmaz.
      </p>
    </section>
  );
}
