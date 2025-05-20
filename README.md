# 📲 CASK RN Challenge - Bildirim Modülü

Bu proje, React Native (v0.79) ile geliştirilen bir push notification (FCM) modülünü içermektedir. Kullanıcıya **Metin**, **Görsel** veya **YouTube bağlantılı** bildirimlerin gönderilip görüntülenmesini sağlar.

---

## 🚀 Özellikler

- Firebase Cloud Messaging (FCM) ile push bildirim desteği
- Bildirim türü seçimi (Metin, Görsel URL, YouTube URL)
- Cihaza özel FCM Token ile hedefli gönderim
- Gecikmeli bildirim gönderimi (X saniye sonra tetikleme)
- Bildirim listesi ve detay görüntüleme
- Modern ve sade kullanıcı arayüzü (NativeWind)

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji           | Açıklama                                      |
|---------------------|-----------------------------------------------|
| React Native (v0.79)| Mobil uygulama iskeleti                       |
| TypeScript          | Güvenli ve sürdürülebilir kod                 |
| Firebase Cloud Messaging | Bildirim servisi                        |
| Zustand             | State management (token, liste vb.)          |
| React Navigation v6 | Sekmeli yapı ve ekran yönlendirme            |
| NativeWind          | Tailwind benzeri stil altyapısı              |
| AsyncStorage        | Lokal veri saklama (token, geçmiş)           |

---

## 📷 Ekranlar ve Akış

### 1️⃣ Ana Sekme: `PN`

#### Varsayılan Durum (Seçim Yapılmadı)
Kullanıcı henüz bir bildirim seçmemişse sade bir yönlendirme ekranı görünür.

![Boş Seçim](./sc/Screenshot_1747745772.png)

#### Bildirim Seçildikten Sonra
Bildirim türüne göre özel detay ekranı açılır:

---

### 2️⃣ Metin Bildirimi Detayı

- **Başlık:** `Gönderilen Bildirim`
- **Mesaj:** `Bu bir Metin bildirimidir.`
- **Tarih:** Gönderim zamanı gösterilir

![Metin Detayı](./sc/Screenshot_1747755296.png)

---

### 3️⃣ Görsel Bildirimi Detayı

- **Başlık:** `Platea elementum`
- **Görsel:** URL'den çekilen fotoğraf
- **Mesaj:** (varsa) gösterilir

![Görsel Detayı](./sc/Screenshot_1747755302.png)

---

### 4️⃣ YouTube Bildirimi Detayı

> (Görsel burada yoksa aynı yapı içinde `WebView` veya `Thumbnail + Aç` şeklinde uygulanır.)

---

### 5️⃣ Bildirim Gönderme Ekranı

Kullanıcı, test amaçlı manuel olarak bildirim gönderebilir.

#### 🧩 Bileşenler:
- **FCM Token:** Otomatik alınır ve kopyalanabilir
- **Bildirim Türü:** Dropdown (Metin, Görsel URL, YouTube URL)
- **Gecikme:** İsteğe bağlı saniye cinsinden gönderim gecikmesi

![Gönderim Formu](./sc/Screenshot_1747745778.png)
![Tür Seçimi](./sc/Screenshot_1747745782.png)
![Gecikmeli Gönderim](./sc/Screenshot_1747745792.png)

---

### 6️⃣ Bildirim Listesi Ekranı

Kullanıcının aldığı tüm bildirimler burada listelenir.

#### İçerik:
- Başlık ve kısa açıklama
- Bildirim gönderim zamanı
- Tıklanınca `PN` sekmesindeki detay ekranına yönlendirir

![Bildirim Listesi](./sc/Screenshot_1747755294.png)

---

## ⚙️ Kurulum

```bash
git clone https://github.com/Aylinbaykan/cask.git
cd cask
npm install
cd ios && pod install && cd ..
npx react-native run-android
