create table if not exists public.products(id uuid primary key default gen_random_uuid(),name text not null,description text,price numeric(10,2) not null check(price>=0),image_url text,active boolean not null default true,created_at timestamptz not null default now());
create table if not exists public.newsletter(id uuid primary key default gen_random_uuid(),email text unique not null,created_at timestamptz not null default now());
alter table public.products enable row level security;alter table public.newsletter enable row level security;
create policy "public view active products" on public.products for select using(active=true);create policy "public newsletter insert" on public.newsletter for insert with check(true);
