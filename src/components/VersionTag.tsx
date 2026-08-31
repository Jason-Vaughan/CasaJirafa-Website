"use client";
import { useEffect, useState } from 'react';

export default function VersionTag() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;
    if (
      hostname.includes('stage') || 
      hostname.includes('vercel.app') || 
      hostname === 'localhost'
    ) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <span className="ml-3 text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
      v1.0.0 ({process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.substring(0, 7) || 'dev'})
    </span>
  );
}
