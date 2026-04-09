# React Redux Toolkit Todo Uygulaması

**React**, **Vite** ve **Redux Toolkit** kullanılarak geliştirilmiş modern ve ölçeklenebilir bir Todo uygulaması.
Bu proje; temiz state yönetimi, yeniden kullanılabilir mimari ve global bildirim sistemi üzerine odaklanmaktadır.

---

## Özellikler

* Yeni görev ekleme
* Mevcut görevi düzenleme
* Tekli görev silme
* Tüm görevleri silme
* Tamamlandı / tamamlanmadı durumu değiştirme
* Tüm görevleri toplu tamamlama / geri alma
* Canlı istatistik paneli
  - Toplam görev sayısı
  - Tamamlanan görev sayısı
  - Tamamlanmayan görev sayısı
* Global otomatik kapanan bildirim sistemi
* Responsive ve modern arayüz
* Redux Toolkit ile state yönetimi
* Custom reusable hook yapısı

---

## Kullanılan Teknolojiler

* **React**
* **Vite**
* **Redux Toolkit**
* **React Redux**
* **Lucide-React**
* **CSS3**

---

## Proje Yapısı

```bash
src/
│
├── components/
│   ├── AutoAlert.jsx
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   ├── TodoList.jsx
│   └── StaticAction.jsx
│
├── hooks/
│   └── useAlert.js
│
├── store/
│   ├── store.js
│   ├── todoSlice.js
│   └── alertSlice.js
│
└── App.jsx
```

---

## Alert Sistemi Mimarisi

Bu proje, Redux ile yönetilen **global bir bildirim sistemi** içermektedir:

* Alert yapısı uygulamanın her yerinden tetiklenebilir
* Bildirimler 2 saniye sonra otomatik kapanır
* Farklı bildirim tipleri desteklenir:

  * Success
  * Error
  * Warning
  * Info

---

## Kurulum

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

---

## Bu Projede Hedeflenen Öğrenimler

Bu proje aşağıdaki konularda pratik yapmak amacıyla geliştirilmiştir:

* Redux Toolkit ile global state yönetimi
* Slice tabanlı mimari kurma
* Custom hook soyutlama mantığı
* Yeniden kullanılabilir component tasarımı
* React state senkronizasyon yapıları
* Ölçeklenebilir frontend proje organizasyonu

