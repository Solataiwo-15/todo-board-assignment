import {
  Home, DocumentText, People, Calendar, TaskSquare, Notification, Book, Setting2, Call,
} from 'iconsax-react';

export interface NavItem {
  label: string;
  icon?: React.ElementType;
  href: string;
  subItems?: NavItem[];
}

export interface NavGroup {
  title?: string;
  items: NavItem[];
}

export const sidebarConfig: NavGroup[] = [
  {
    items: [
      { label: 'Home', icon: Home, href: '#' },
      { label: 'MKVanBinnen', icon: TaskSquare, href: '#' },
      { label: 'Document Management', icon: DocumentText, href: '#' },
      { label: 'Patient Information', icon: People, href: '#' },
      { label: 'Agenda', icon: Calendar, href: '#' },
      {
        label: 'My Department',
        icon: TaskSquare,
        href: '#',
        subItems: [
          { label: 'News', href: '#' },
          { label: 'Members', href: '#' },
          { label: 'To - Do', href: '/todos' }, 
          { label: 'Form Task', href: '#' },
          { label: 'Agenda', href: '#' },
          { label: 'Follow up system', href: '#' },
          { label: 'Group Settings', href: '#' }, 
        ],
      },
      { label: 'Phone numbers', icon: Call, href: '#' },
      { label: 'My to do Protocols', icon: Book, href: '#' },
      { label: 'My Notifications', icon: Notification, href: '#' },
      { label: 'Knowledge Base', icon: Book, href: '#' },
      {
        label: 'Admin',
        icon: Setting2,
        href: '#',
        subItems: [
          { label: 'Agenda', href: '#' },
          { label: 'News', href: '#' },
          { label: 'Poll', href: '#' },
          { label: 'Department Rules', href: '#' },
          { label: 'Follow up system', href: '#' },
        ],
      },
    ],
  },
];