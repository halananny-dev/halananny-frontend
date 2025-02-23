import Link from 'next/link';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function DashboardNavbar() {
  return (
    <header className="fixed w-full top-0 bg-white border-b z-50">
      <div className="h-16 flex items-center justify-between px-4">
        <Link href="/dashboard" className="text-xl font-bold">
          HalaNanny
        </Link>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
