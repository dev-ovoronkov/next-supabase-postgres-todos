import { PropsWithChildren } from 'react';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function AuthLayout({ children }: PropsWithChildren) {
  const client = createClient();
  const user = await client.auth.getUser();

  if (user.data.user) {
    return redirect('/');
  }

  return (
    <article className="flex justify-center items-center w-full h-full px-4">
      {children}
    </article>
  );
}
