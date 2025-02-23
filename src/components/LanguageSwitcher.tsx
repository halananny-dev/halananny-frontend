'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { Button } from './ui/button';
import { usePathname, useRouter } from '@/navigation';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Button
      onClick={switchLocale}
      className="px-4 py-2 rounded"
      variant="outline"
    >
      {locale === 'en' ? 'العربية' : 'English'}
    </Button>
  );
}
