import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NavbarUserButtons = () => {
  return (
    <div className="flex items-center">
      <Link href="/login" className="mr-2">
        <Button size="sm" variant="outline">
          Login
        </Button>
      </Link>

      <Link href="/register">
        <Button size="sm">Register</Button>
      </Link>
    </div>
  );
};

export default NavbarUserButtons;
