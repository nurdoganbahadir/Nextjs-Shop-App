# Hi I'm Nurdoğan Bahadır 👋. Welcome to my Shop App Project with React.

Shop App bir e-ticaret sitesinin demosudur. Ürünleri ana sayfada görüntüleyebilir ve ürünler üzerinde filtreleme işlemleri yapabilirsiniz. Mevcut ürünler kategorilere ayrılmıştır ve ana sayfadan bu kategorilere erişilebilmektedir. Arama kısmı dinamik bir yapıda api isteği gerçekleştirmektedir. SPA yönlendirmesi ile ürün kartına tıklandığında, ilgili ürünün detay sayfasına yönlendirme yapıldı. Detay sayfasında ürün adı, detaylı açıklama, tam boyutlu resim, açılabilir galeri yapısı, fiyat ve diğer özellikler gösterildi. Responsive tasarım uygulandı, hem mobil hem masaüstü cihazlarda uyum sağlandı. Kullanıcı deneyimini geliştirmek için sade bir tasarım benimsendi ve görsel animasyonlar kullanıldı. Kod okunabilirliği ve optimizasyon açısından kodlar modüllere bölündü. Performans ve SEO optimizasyonları Next.js ile birlikte sağlandı. UI framework için MaterialUI tercih edildi. Sayfa yüklenme sürelerinin kontrolü için Lazy Loading uygulandı.

# Live Link of the Project

[Click Me]()

# Kullandığım Teknoloji ve Kütüphaneler

- Next.js
- React
- Material UI
- Lazy Laoading

```bash
├── public.  
├── src
│   ├── actions
│   │   └── productsAPI.js
│   ├── app
│   │   ├── [productId]
│   │   │   ├── layout.js
│   │   │   ├── loading.js
│   │   │   └── page.js
│   │   ├── layout.js
│   │   ├── loading.js
│   │   └── page.js
│   ├── components
│   │   ├── LayoutComponents
│   │   │   └── DefaultLayout.jsx
│   │   ├── Loading
│   │   │   ├── index.js
│   │   │   └── styles.module.css
│   │   ├── ProductCard
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductCategories.jsx
│   │   │   └── ProductList.jsx
│   │   ├── ProductDetail
│   │   │   ├── ProductAccordian.jsx
│   │   │   ├── ProductArrangement.jsx
│   │   │   ├── ProductDesc.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── ProductImages.jsx
│   │   │   ├── ProductProperties.jsx
│   │   │   └── ProductReviews.jsx
│   │   └── Skeleton
│   │       ├── index.js
│   │       └── styles.module.css
├── .env
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── README.md
```


  


# Nasıl Yüklenir

İlk olarak projeyi GitHub'dan bilgisayarınıza klonlayın. Bunun için terminale aşağıdaki komutu yazabilirsiniz:

### `https://github.com/nurdoganbahadir/Nextjs-Shop-App.git`

Proje klasörüne girdikten sonra, gerekli tüm bağımlılıkları yüklemek için terminalde aşağıdaki komutu çalıştırın:

### `npm install`

Yüklemeyi tamamladıktan sonra projeyi çalıştırmak için aşağıdaki komutu kullanabilirsiniz:

### `npm run dev`

Proje başarıyla çalıştıysa, tarayıcınızda http://localhost:3000 adresine giderek uygulamanızı görüntüleyebilirsiniz.







# How does my project look

![Redux Toolkit]()
