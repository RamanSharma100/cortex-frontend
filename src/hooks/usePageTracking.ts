'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackEvent } from '@/services/analytics';

export function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const query = searchParams ? `?${searchParams}` : '';
      const url = `${pathname}${query}`;
      trackEvent('$pageview', {
        $current_url: url,
        pathname,
      });
    }
  }, [pathname, searchParams]);
}
