'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Check if the current URL has a hash that corresponds to our old routes
    const hash = window.location.hash;
    if (hash === '#/features' || hash === '#features') {
      router.replace('/features');
    } else if (hash === '#/roadmap' || hash === '#roadmap') {
      router.replace('/roadmap');
    } else if (hash === '#/feedback' || hash === '#feedback') {
      router.replace('/feedback');
    } else if (hash === '#/privacy' || hash === '#privacy') {
      router.replace('/privacy');
    } else if (hash === '#/contact' || hash === '#contact') {
      router.replace('/contact');
    }
  }, [router]);

  return null;
}
