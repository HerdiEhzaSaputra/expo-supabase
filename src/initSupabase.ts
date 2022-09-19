import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

// Better put your these secret keys in .env file
export const supabase = createClient('https://xnndimdyrfvxnhcqhniy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhubmRpbWR5cmZ2eG5oY3Fobml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM1NzQ5NzksImV4cCI6MTk3OTE1MDk3OX0._Xk0CKYVQqQlMISkdSFIXolBSYVnGxcl_HfhPjTjUXQ', {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});
