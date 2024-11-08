import { envConfig } from "@/config/env.config";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseClient = createClient(
  envConfig.supabase.url,
  envConfig.supabase.anon
);
