# PAKAL CARDS Restart v1

## Included
- Exact supplied homepage image as the complete top section.
- Editable routes carousel with local fallback data.
- `/rules` page with the supplied game rules.
- `/admin` route management screen using Supabase Auth + database.

## Supabase
1. Create a Supabase project.
2. Run `supabase/schema.sql` in SQL Editor.
3. Create an Auth user for the administrator.
4. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel.
5. Upload route photos to the public `routes` bucket and paste the public URL in `/admin`.

## Commands
npm install
npm run typecheck
npm run build
npm run dev
