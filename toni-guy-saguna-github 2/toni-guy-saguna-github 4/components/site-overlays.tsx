"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FloatingActions = dynamic(() => import("@/components/floating-actions").then((mod) => mod.FloatingActions), {
  ssr: false,
});

const DraggableLogoPanel = dynamic(() => import("@/components/draggable-logo-panel").then((mod) => mod.DraggableLogoPanel), {
  ssr: false,
});

export function SiteOverlays() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const schedule = window.requestIdleCallback
      ? window.requestIdleCallback(() => setReady(true), { timeout: 2000 })
      : window.setTimeout(() => setReady(true), 2000);

    return () => {
      if (typeof schedule === "number") {
        window.clearTimeout(schedule);
      } else {
        window.cancelIdleCallback(schedule);
      }
    };
  }, []);

  return (
    <>
      {ready ? (
        <>
          <DraggableLogoPanel />
          <FloatingActions />
        </>
      ) : null}
    </>
  );
}
