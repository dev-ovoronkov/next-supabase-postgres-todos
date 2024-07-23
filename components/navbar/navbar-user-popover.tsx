'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { LogOutIcon } from 'lucide-react';
import logoutClientUser from '@/utils/user/logoutClientUser';
import { useRouter } from 'next/navigation';

const NavbarUserPopover = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const error = await logoutClientUser();

    if (!error) {
      router.refresh();
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback>@</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <Command>
          <CommandList>
            <CommandGroup heading="Settings">
              <CommandItem className="cursor-pointer" onSelect={handleLogout}>
                <LogOutIcon className="mr-2 h-4 w-4" />
                Log Out
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default NavbarUserPopover;
