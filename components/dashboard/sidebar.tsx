import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { NotepadTextIcon, PlusIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="flex-none h-full w-[240px] border-r border-r-divider shadow-sm">
      <Command>
        <CommandList>
          <CommandGroup heading="Settings">
            <CommandItem>Coming soon</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Collections">
            <CommandItem className="cursor-pointer">
              <PlusIcon className="mr-2 h-4 w-4" />
              <span>Create Collection</span>
            </CommandItem>
            <CommandItem className="cursor-pointer">
              <NotepadTextIcon className="mr-2 h-4 w-4" />
              <span>Mock Collection</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </aside>
  );
};

export default Sidebar;
