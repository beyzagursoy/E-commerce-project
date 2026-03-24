import React from 'react';

export default function PageContent({ children }) {
  return (
    <main className="flex-grow w-full">
      {children}
    </main>
  );
}