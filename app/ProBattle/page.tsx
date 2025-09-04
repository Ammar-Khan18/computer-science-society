'use client';

import * as React from "react";

const ProBattle: React.FC = () => {
  return (
    <main className="grid min-h-screen place-items-center colour-bg px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-lg font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance colour-accent sm:text-7xl">
          Coming Soon!
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty colour-text sm:text-xl/8">
          Sorry, this page is not available yet.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a
            href="/"
            className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-xs hover:bg-secondary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProBattle;
