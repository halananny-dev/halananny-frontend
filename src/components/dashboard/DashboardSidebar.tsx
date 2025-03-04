"use client"

import { useI18n } from '@/i18/i18Context';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IoChevronBack, IoChevronForward, IoMenu } from 'react-icons/io5';
import { dashboard_navigation } from '../constants';
import Img from '../sections/Img';
import { Button } from '../ui/button';

export default function DashboardSidebar({ isCollapsed, setIsCollapsed }) {
  const pathname = usePathname()
  const { t } = useI18n()
  const router = useRouter()

  return (
    <div className={"drop-shadow-sidebar z-20 bg-white text-gray-900 h-screen"}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)
        }
        className='max-w-40 absolute flex items-center justify-center lg:top-12 rtl:-left-18 lg:ltr:right-0 lg:ltr:left-auto ltr:left-4  top-4 translate-x-full' >
        <Img src="/sidebar-toggle.svg" className='hidden lg:block rtl:rotate-180' />

        <IoMenu className='text-white text-xl lg:hidden' />
        {isCollapsed ?
          <IoChevronForward className='absolute hidden lg:block text-white' /> :
          <IoChevronBack className='absolute hidden lg:block text-white' />
        }
      </button >
      <div className={cn("h-full overflow-x-hidden overflow-y-auto transition-all lg:border-r lg:border-gray-5 ease-in-out duration-200 bg-white flex flex-col justify-between py-12 gap-10 lg:relative fixed ltr:left-0 rtl:right-0 top-0",
        isCollapsed ? "lg:w-18 w-0 lg:px-3.5" : "w-[305px] px-4.5 z-50"
      )}>
        <div>
          <Link
            href="/dashboard/profile"
            className={cn(
              'flex gap-3 items-center rounded-xl py-4',
              isCollapsed ? "!bg-white" : "bg-gray-750 px-2 gap-3",
              pathname === '/dashboard/profile' ? "bg-teal-500 text-white " : ""
            )}>
            <Img src="/english.svg" className='!w-10 !h-10 rounded-full' />
            {!isCollapsed && <div className='flex flex-col gap-2'>
              <h3 className='font-semibold leading-none truncate line-clamp-1'>Fatima Ali Hassan</h3>
              <div className='text-sm flex gap-1 font-medium leading-none'>
                <span className='truncate line-clamp-1'>{t.dashboard.profile}</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.83752 2.24552C10.0542 2.02888 10.0542 1.66782 9.83752 1.4623L8.5377 0.162477C8.33218 -0.0541591 7.97112 -0.0541591 7.75448 0.162477L6.7324 1.179L8.81544 3.26205M0 7.91696V10H2.08304L8.22664 3.85085L6.14359 1.76781L0 7.91696Z" fill="currentColor" />
                </svg>
              </div>
            </div>}
          </Link>
          <div className='mt-11 flex flex-col gap-2.5'>
            {dashboard_navigation.map(({ name, href, icon }) => (
              <Link
                key={name}
                href={href}
                className={cn(
                  "flex items-center rounded-xl bg-gray-750",
                  isCollapsed ? "w-12 h-12 flex items-center justify-center" : "p-3.5 pl-6 gap-3",
                  pathname === href ? "bg-teal-500 text-white " : ""
                )}>
                <div dangerouslySetInnerHTML={{ __html: icon }} className={pathname === href ? "text-white" : "text-teal-500"}></div>
                {!isCollapsed && <>
                  <span className='text-sm font-semibold truncate line-clamp-1'>
                    {t.dashboard[name]}
                  </span>
                  {name.includes('Plan') && <p className='text-[9px] font-medium h-5 w-24 rounded-full bg-gray-900 ml-auto flex items-center justify-center text-white'>
                    {t.dashboard.upgrade}
                  </p>}
                  <IoChevronForward className={cn(
                    'ltr:ml-auto rtl:mr-auto',
                    pathname === href ? "text-white" : "text-gray-990"
                  )} />
                </>}
              </Link>
            ))}
          </div>
        </div>
        <Button
          type='button'
          variant="ghost"
          onClick={() => router.push('/')}
          className={'flex items-center justify-start rounded-xl bg-gray-750 ' + (isCollapsed ? "w-12 h-12 flex items-center justify-center" : "p-3.5 pl-7 gap-2.5")}>
          <Img src="/logout.svg" />
          {!isCollapsed && <span className='text-sm font-semibold'>
            {t.dashboard.logout}
          </span>}
        </Button>
      </div>
      {
        !isCollapsed &&
        <div
          onClick={() => setIsCollapsed(true)}
          className='bg-black/40 fixed lg:hidden w-screen h-screen top-0'></div>
      }
    </div >
  );
}