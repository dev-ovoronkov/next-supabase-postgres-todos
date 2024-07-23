import { createClient } from '@/utils/supabase/client';
import { AuthError } from '@supabase/auth-js';

const logoutClientUser = async (): Promise<AuthError | null> => {
  const client = createClient();
  const { error } = await client.auth.signOut();

  return error;
};

export default logoutClientUser;
