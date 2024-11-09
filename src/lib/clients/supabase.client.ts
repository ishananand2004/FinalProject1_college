import { envConfig } from "@/config/env.config";
import { Database } from "@/supabase.types";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseClient = createClient<Database>(
  envConfig.supabase.url,
  envConfig.supabase.anon
);
