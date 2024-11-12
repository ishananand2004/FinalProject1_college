export const envConfig = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost:54321",
    anon: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },
};
