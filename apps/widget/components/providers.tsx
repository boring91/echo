"use client";

import * as React from "react";
import { Provider } from "jotai";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <ConvexProvider client={convex}>{children}</ConvexProvider>
    </Provider>
  );
}
