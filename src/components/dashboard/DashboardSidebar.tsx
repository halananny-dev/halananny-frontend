import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/dashboard', icon: FaHome },
  { name: 'Find Nanny', href: '/dashboard/search', icon: FaHome },
  { name: 'Messages', href: '/dashboard/messages', icon: FaHome },
  { name: 'Schedule', href: '/dashboard/schedule', icon: FaHome },
  { name: 'Profile', href: '/dashboard/profile', icon: FaHome },
  { name: 'Settings', href: '/dashboard/settings', icon: FaHome },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r h-[calc(100vh-4rem)] flex-shrink-0">
      <nav className="p-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium rounded-lg',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
