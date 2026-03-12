import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ccmlhzigwqbplgiohbdd.supabase.co";
const supabaseAnonKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjbWxoemlnd3FicGxnaW9oYmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMzg1OTksImV4cCI6MjA4ODgxNDU5OX0.s2DGLDQSvRtgq0EEly6PPWHOFL0NqvzpJwEHzv16e34";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
