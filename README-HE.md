# פק״ל Pixel Perfect v4 - תיקון Vercel

הגרסה עודכנה ל-Next.js 15.5.29, גרסת Maintenance LTS מתוקנת, כדי למנוע חסימת פריסה עקב גרסה פגיעה.

## העלאה ל-GitHub
יש להעלות את כל תוכן התיקייה לשורש המאגר, כולל `package.json` החדש. אם קיים `package-lock.json` ישן במאגר, יש למחוק אותו לפני ההעלאה או ליצור אותו מחדש באמצעות `npm install`.

## פריסה
```bash
npm install
npm run typecheck
npm run build
```

ב-Vercel יש ללחוץ Redeploy לאחר שה-commit החדש מופיע כמקור הפריסה.
