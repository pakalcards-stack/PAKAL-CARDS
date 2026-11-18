-- Apply to PAKAL-CARDS after creating the admin_users and routes tables.
-- Replaces the earlier PUBLIC editing policies, if they were installed.
ALTER TABLE public.routes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "temporary public add routes" ON public.routes;
DROP POLICY IF EXISTS "temporary public update routes" ON public.routes;
DROP POLICY IF EXISTS "temporary public delete routes" ON public.routes;
DROP POLICY IF EXISTS "temporary public read routes" ON public.routes;
DROP POLICY IF EXISTS "Public can view routes" ON public.routes;
DROP POLICY IF EXISTS "Admin can insert routes" ON public.routes;
DROP POLICY IF EXISTS "Admin can update routes" ON public.routes;
DROP POLICY IF EXISTS "Admin can delete routes" ON public.routes;
CREATE POLICY "Public can view routes" ON public.routes FOR SELECT TO anon,authenticated USING(active=true);
CREATE POLICY "Admin can insert routes" ON public.routes FOR INSERT TO authenticated WITH CHECK(public.is_admin());
CREATE POLICY "Admin can update routes" ON public.routes FOR UPDATE TO authenticated USING(public.is_admin()) WITH CHECK(public.is_admin());
CREATE POLICY "Admin can delete routes" ON public.routes FOR DELETE TO authenticated USING(public.is_admin());
REVOKE ALL ON public.routes FROM anon,authenticated;
GRANT SELECT ON public.routes TO anon,authenticated;
GRANT INSERT,UPDATE,DELETE ON public.routes TO authenticated;
DROP POLICY IF EXISTS "temporary public route image upload" ON storage.objects;
DROP POLICY IF EXISTS "temporary public route image read" ON storage.objects;
-- Existing pakal-routes bucket policies created previously remain in force.
