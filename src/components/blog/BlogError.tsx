'use client';

import React from 'react';

interface BlogErrorProps {
  message: string;
}

export function BlogError({ message }: BlogErrorProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center max-w-2xl mx-auto">
      <p className="text-red-600">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-6 py-2 bg-[#2B4C7E] text-white rounded-lg hover:bg-[#1E3A5F] transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
