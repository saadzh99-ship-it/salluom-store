# 🛒 Salluom Store — Blockspin Cash

متجر بيع Blockspin Cash مع دفع عبر Apple Pay وتوصيل فوري.

## 📁 هيكل الملفات

```
salluom-store/
├── index.html   ← الصفحة الرئيسية
├── style.css    ← التصميم
├── app.js       ← الكود البرمجي
└── README.md    ← هذا الملف
```

## 🚀 رفع المتجر على GitHub Pages

1. افتح [github.com](https://github.com) وسجّل دخول
2. اضغط **New repository** — اسمه: `salluom-store`
3. اجعله **Public** ← مهم لـ GitHub Pages
4. ارفع الملفات الثلاثة: `index.html` + `style.css` + `app.js`
5. اذهب إلى **Settings → Pages**
6. اختر **Branch: main** ← Save
7. رابطك سيكون:
   `https://YOUR_USERNAME.github.io/salluom-store`

## 💳 ربط Apple Pay الحقيقي

Apple Pay يحتاج بوابة دفع. الأسهل هو **Stripe**:

1. سجّل في [stripe.com](https://stripe.com)
2. فعّل Apple Pay من لوحة التحكم
3. في `app.js` أضف مفتاحك:
   ```js
   const stripe = Stripe('pk_live_XXXXXXXX');
   ```
4. اتبع [توثيق Stripe لـ Apple Pay](https://stripe.com/docs/apple-pay)

## 📞 الدعم

تواصل عبر GitHub Issues.
