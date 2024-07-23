import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/dashboard/sidebar';
import { PropsWithChildren } from 'react';

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const client = createClient();
  const user = await client.auth.getUser();

  if (!user.data.user) {
    return redirect('/login');
  }

  return (
    <article className="flex flex-1 w-full">
      <Sidebar />

      <div className="flex-1 p-4 overflow-auto">{children}</div>
    </article>
  );
}
