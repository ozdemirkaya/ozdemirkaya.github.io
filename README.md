# Özdemir Kaya - Kişisel Portfolyo Web Sitesi Kılavuzu

Bu döküman, portfolyo web sitesinin teknik yapısını, dosya düzenini, tasarım sistemini ve yerel geliştirme ortamının nasıl çalıştırılacağını açıklayan resmi bir kılavuzdur.

---

## 🚀 Proje Tanımı ve Teknolojiler

Özdemir Kaya'nın uzmanlık alanlarını (Python, FastAPI, SaaS vb.) ve projelerini sergileyen, modern, yüksek performanslı ve responsive (mobil uyumlu) bir tek sayfalık (Single Page) web uygulamasıdır.

### Kullanılan Teknolojiler & Kütüphaneler:
1.  **Core:** HTML5 (Semantik yapı) & Vanilla Javascript (ES6+).
2.  **Styling:** Modern Vanilla CSS3 (CSS Değişkenleri, Flexbox, Grid, Glassmorphic efektler ve akıcı animasyonlar).
3.  **İkon Kütüphanesi:** [Lucide Icons](https://lucide.dev/) (Genel arayüz ikonları için CDN üzerinden yüklenmektedir).
4.  **Marka Logoları:** LinkedIn ve GitHub gibi marka logoları, Lucide'in yeni sürümlerinde kaldırıldığı için doğrudan **Inline SVG** olarak entegre edilmiştir (reklam engelleyicilere takılmaması ve CDN bağımlılığını azaltmak için en güvenli yöntemdir).
5.  **Tipografi:** Google Fonts üzerinden yüklenen *Plus Jakarta Sans* (Metinler için) ve *JetBrains Mono* (Kod yapıları ve logolar için).

---

## 📂 Dosya Yapısı

Proje dosyaları sade, ölçeklenebilir ve kolay yönetilebilir bir yapıda tasarlanmıştır:

```text
ozdemir-portfolio/
├── assets/                 # Sitede kullanılan görseller ve logolar
│   ├── bilge_ai.png        # Bilge AI projesi ekran görüntüsü / görseli
│   └── oziron_tech.png     # Mihenk projesi ekran görüntüsü / görseli
├── index.html              # Sitenin ana HTML5 yapısı, meta etiketleri ve SEO ayarları
├── style.css               # Tüm tasarım sistemi, renk paletleri ve bileşen stilleri
├── script.js               # Etkileşimler (menü, kopyalama, scroll animasyonları, form simülasyonu)
├── package.json            # Node.js ortamı için proje bağımlılıkları ve scriptler
├── package-lock.json       # Bağımlılık versiyon kilitleme dosyası
└── README.md               # Bu dökümantasyon dosyası
```

---

## 💻 Yerel Geliştirme Sunucusunu Çalıştırma

Web sitesini yerel makinenizde çalıştırmak ve yaptığınız değişiklikleri canlı olarak görmek için aşağıdaki yöntemleri kullanabilirsiniz:

### Yöntem A: Python Web Server (Önerilen - Bağımlılıksız)
Mac veya Windows cihazınızda Node.js kurulu değilse, sistemde yüklü olan Python'ı kullanarak tek komutla sunucuyu başlatabilirsiniz:

Terminal veya komut satırını açıp proje ana dizinine (`ozdemir-portfolio/`) gidin ve şu komutu çalıştırın:
```bash
python3 -m http.server 3000
```
Tarayıcınızda şu adrese gidin:
👉 **[http://localhost:3000](http://localhost:3000)**

### Yöntem B: Node.js & NPM (Node.js Yüklü Cihazlar İçin)
Eğer sisteminizde Node.js kurulu ise, bağımlılıkları yükleyip yerel sunucuyu çalıştırabilirsiniz:

1.  Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```
2.  Geliştirme sunucusunu başlatın:
    ```bash
    npm run dev
    ```
Tarayıcınızda şu adrese gidin:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🎨 Tasarım Sistemi & CSS Yapısı (`style.css`)

Tasarım sistemi, karanlık mod (Dark Mode) odaklı, canlı mor (`--primary`) ve turkuaz (`--secondary`) vurgu renklerine sahip neon-glassmorphic bir estetik sunar.

### CSS Değişkenleri (`:root`)
Tasarım üzerinde genel bir değişiklik yapmak için `style.css` dosyasındaki `:root` değişkenlerini düzenlemeniz yeterlidir:
*   `--bg-main`: Sayfanın ana arka plan rengi (`hsl(230, 25%, 5%)`).
*   `--primary`: Vurgulanan ana mor renk (`hsl(260, 100%, 68%)`).
*   `--secondary`: Vurgulanan ikincil turkuaz renk (`hsl(180, 100%, 45%)`).
*   `--text-primary`: Ana metin rengi (`hsl(220, 20%, 96%)`).

### Öne Çıkan Tasarım Detayları:
*   **Glassmorphism:** Kartlarda ve form arka planlarında `backdrop-filter: blur(12px)` ve yarı saydam sınır çizgileri (`border: 1px solid rgba(...)`) kullanılarak cam efekti verilmiştir.
*   **Scroll Reveal Animasyonu:** Sayfa aşağı kaydırıldıkça `.reveal` sınıfına sahip elemanlar JS (Intersection Observer) yardımıyla pürüzsüz bir şekilde görünür hale gelir.

---

## ⚙️ Fonksiyonel Özellikler (`script.js`)

Sitenin dinamik ve interaktif özellikleri `script.js` dosyasında yönetilmektedir:

1.  **Header Scroll Efekti:** Kullanıcı sayfayı 50px aşağı kaydırdığında menü çubuğu (`#main-header`) arkasına cam efekti ve yarı saydamlık veren `.scrolled` sınıfını alır.
2.  **Mobil Menü:** Mobil cihazlarda sağ üstteki menü ikonuna basıldığında açılır menü tetiklenir, bir linke tıklandığında menü otomatik olarak kapanır.
3.  **E-Posta Kopyalama Özelliği:** İletişim alanındaki E-posta kutusuna tıklandığında e-posta adresi otomatik olarak panoya kopyalanır ve kullanıcıya anlık geri bildirim verilir ("Panoya Kopyalandı! ✓").
4.  **İletişim Formu Simülasyonu:** İletişim formu doldurulup gönderildiğinde buton durumu "Gönderiliyor..." olarak güncellenir ve başarılı gönderim sonrasında kullanıcıya şık bir bildirim mesajı gösterilir.

---

## ✍️ Gelecekteki Güncellemeler İçin İpuçları

### Yeni Proje Ekleme veya Düzenleme
`index.html` dosyasındaki `<div class="projects-grid">` alanına giderek yeni bir proje kartı ekleyebilirsiniz. İkonlar için marka logoları dışındakilerde `<i data-lucide="ikon-ismi"></i>` kalıbını, marka logolarında ise bu dökümandaki inline SVG'leri kullanmanız tavsiye edilir.

### SEO Optimizasyonu
Arama motorlarında görünürlüğü artırmak için `index.html` dosyasının `<head>` kısmındaki `<title>` ve `<meta name="description" ...>` etiketlerini güncel tutun.
