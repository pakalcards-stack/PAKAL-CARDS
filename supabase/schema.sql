create table if not exists public.routes(id uuid primary key default gen_random_uuid(),title text not null,description text not null default '',image_url text not null,sort_order int not null default 0,active boolean not null default true,created_at timestamptz not null default now());
alter table public.routes enable row level security;
create policy "public read active routes" on public.routes for select using(active=true);
create policy "authenticated manage routes" on public.routes for all to authenticated using(true) with check(true);
insert into storage.buckets(id,name,public) values('routes','routes',true) on conflict(id) do nothing;
create policy "public read route images" on storage.objects for select using(bucket_id='routes');
create policy "authenticated upload route images" on storage.objects for insert to authenticated with check(bucket_id='routes');
create policy "authenticated update route images" on storage.objects for update to authenticated using(bucket_id='routes');
create policy "authenticated delete route images" on storage.objects for delete to authenticated using(bucket_id='routes');
