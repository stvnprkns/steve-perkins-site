import React from "react";

/**
 * LayoutWrapper provides consistent horizontal padding.
 * Width constraints should be handled by individual Section components.
 */
export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 sm:px-6 w-full">
      {children}
    </div>
  );
}
