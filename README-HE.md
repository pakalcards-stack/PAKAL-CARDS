# חבילת שחזור עיצוב פק״ל

## מה כלול
- פרויקט Next.js App Router מלא ומוכן ל-Vercel.
- Header רספונסיבי ונגיש.
- Hero, קלפי משאבים, ניווט, מסלולים, סיפור המוצר, רכישה, FAQ, קשר ו-Footer.
- RTL מלא ונקודות שבירה: 360px, 760px ו-1050px.

## לפני הפעלה
העתיקו אל `public/assets/` את הנכסים המקוריים הבאים:
`logo.png`, `logo-illustrated.png`, `water.png`, `food.png`, `time.png`, `morale.png`, `product.jpg`, `land-1.jpg` עד `land-20.jpg`.

## הפעלה
```bash
npm install
npm run typecheck
npm run build
npm run dev
```

## נקודות שחייבים לחבר מהפרויקט הקיים
1. קישורי Checkout אמיתיים באזור `#purchase`.
2. תוכן FAQ המקורי.
3. טופס, דוא״ל וטלפון אמיתיים באזור `#contact`.
4. שמות ונתוני מסלולים אמיתיים והתאמתם לתמונות.

החבילה אינה ממציאה פרטי רכישה או קשר. יש להעביר את הפונקציונליות הקיימת לפני פרסום.
