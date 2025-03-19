'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BusinessInABoxRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/services#business-in-a-box');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Redirecting...</h1>
        <p className="text-xl text-gray-300 mb-8">
          Taking you to our Business-in-a-Box services.
        </p>
        <div className="flex justify-center">
          <div className="w-16 h-16 border-t-4 border-emerald-500 border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
} 