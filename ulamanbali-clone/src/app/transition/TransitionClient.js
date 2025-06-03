'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import '../detail/detail.css';
import './transition.css';

export default function TransitionClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const label = searchParams.get('label') || 'Home';

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 1500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="transition-page">
      {label}
    </div>
  );
}
