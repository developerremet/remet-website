// Waitlist storage: the Supabase project behind the remet.me waitlist.
// The anon key is meant to be public. It is safe in client code ONLY because the
// table's row-level security allows INSERT and nothing else. Never put the service_role key here.
// .github/workflows/supabase-keepalive.yml reads these two lines; keep their exact format.
export const SUPABASE_URL = 'https://ujdvlxbhnzdmhnstzbrr.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZHZseGJobnpkbWhuc3R6YnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2NzExNjMsImV4cCI6MjEwMTI0NzE2M30.4IQZVwhYtFXKZ8nfR7q59eVlcE0WMZu-v-UWoEXefM4';
