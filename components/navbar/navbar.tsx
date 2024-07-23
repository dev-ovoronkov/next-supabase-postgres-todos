'use server';

import { createClient } from '@/utils/supabase/server';
import NavbarUserPopover from '@/components/navbar/navbar-user-popover';
import Link from 'next/link';
import NavbarUserButtons from '@/components/navbar/navbar-user-buttons';

const Navbar = async () => {
  const client = createClient();
  const userIdentities = await client.auth.getUserIdentities();

  return (
    <>
      <div className="h-[48px]" />
      <nav className="fixed top-0 left-0 w-full h-[48px] flex items-center justify-between px-4 border-b border-b-divider shadow-sm flex-none">
        <Link href="/">
          <p className="text-sm font-bold">NextSupabasePGTodos</p>
        </Link>

        {userIdentities.data ? (
          <NavbarUserPopover user={userIdentities.data.identities[0]} />
        ) : (
          <NavbarUserButtons />
        )}
      </nav>
    </>
  );
};

export default Navbar;
