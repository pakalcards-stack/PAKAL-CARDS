-- TEMPORARY PUBLIC EDITING: ANYONE can add, edit and delete routes.
-- Apply only to a temporary test project; remove these policies when adding user roles.
create table if not exists public.routes (
 id uuid primary key default gen_random_uuid(),
 title text not null check (char_length(title) between 1 and 100),
 description text not null default '',
 image_url text not null,
 sort_order integer not null default 0,
 active boolean not null default true,
 created_at timestamptz not null default now()
);
alter table public.routes enable row level security;
drop policy if exists "public read active routes" on public.routes;
drop policy if exists "authenticated manage routes" on public.routes;
drop policy if exists "temporary public read routes" on public.routes;
drop policy if exists "temporary public add routes" on public.routes;
drop policy if exists "temporary public update routes" on public.routes;
drop policy if exists "temporary public delete routes" on public.routes;
create policy "temporary public read routes" on public.routes for select to anon,authenticated using(active=true);
create policy "temporary public add routes" on public.routes for insert to anon,authenticated with check(true);
create policy "temporary public update routes" on public.routes for update to anon,authenticated using(true) with check(true);
create policy "temporary public delete routes" on public.routes for delete to anon,authenticated using(true);
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('routes','routes',true,5242880,array['image/jpeg','image/png','image/webp','image/gif']) on conflict(id) do update set public=true,file_size_limit=5242880,allowed_mime_types=array['image/jpeg','image/png','image/webp','image/gif'];
drop policy if exists "public read route images" on storage.objects;
drop policy if exists "authenticated upload route images" on storage.objects;
drop policy if exists "authenticated update route images" on storage.objects;
drop policy if exists "authenticated delete route images" on storage.objects;
drop policy if exists "temporary public route image read" on storage.objects;
drop policy if exists "temporary public route image upload" on storage.objects;
create policy "temporary public route image read" on storage.objects for select to anon,authenticated using(bucket_id='routes');
create policy "temporary public route image upload" on storage.objects for insert to anon,authenticated with check(bucket_id='routes');
-- Images are not automatically removed when a route is deleted.
