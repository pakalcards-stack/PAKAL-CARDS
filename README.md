# PAKAL CARDS
שלד ראשוני לחנות ומשחק קלפים ישראלי, מבוסס Next.js, TypeScript, Framer Motion ו-Supabase.

## הפעלה מקומית
1. התקינו Node.js 20 LTS.
2. הריצו `npm install`.
3. העתיקו `.env.example` ל-`.env.local` והזינו את פרטי Supabase.
4. הריצו `npm run dev` ופתחו `http://localhost:3000`.

## העלאה
צרו Repository בשם `pakal-cards`, העלו את כל תוכן התיקייה וחברו אותו ל-Vercel. ב-Vercel הוסיפו את משתני הסביבה מתוך `.env.example`.

## נכסים
ראו `public/assets/README.md`. האתר כולל placeholders כדי שה-build יעבוד גם לפני הוספת התמונות.

## בסיס נתונים
הריצו את `supabase/schema.sql` ב-Supabase SQL Editor. סכמת ההתחלה כוללת מוצרים ורשימת דיוור עם RLS.
