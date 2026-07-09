"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PANEL_WIDTH = 240;
const PANEL_HEIGHT = 240;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function DraggableLogoPanel() {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({
    active: false,
    offsetX: 0,
    offsetY: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const x = clamp(window.innerWidth - PANEL_WIDTH - 20, 12, window.innerWidth - PANEL_WIDTH - 12);
    const y = clamp(window.innerHeight * 0.34, 96, window.innerHeight - PANEL_HEIGHT - 12);
    setPosition({ x, y });
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      if (!dragState.current.active) {
        return;
      }

      const nextX = clamp(event.clientX - dragState.current.offsetX, 12, window.innerWidth - PANEL_WIDTH - 12);
      const nextY = clamp(event.clientY - dragState.current.offsetY, 72, window.innerHeight - PANEL_HEIGHT - 12);
      setPosition({ x: nextX, y: nextY });
    };

    const onUp = () => {
      dragState.current.active = false;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block">
      <div
        ref={panelRef}
        onPointerDown={(event) => {
          dragState.current.active = true;
          dragState.current.offsetX = event.clientX - position.x;
          dragState.current.offsetY = event.clientY - position.y;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        className="logo-tone-cycle pointer-events-auto absolute cursor-grab select-none rounded-[28px] border bg-emerald-950/24 p-4 backdrop-blur-md active:cursor-grabbing"
        style={{
          left: position.x,
          top: position.y,
          width: PANEL_WIDTH,
          height: PANEL_HEIGHT,
        }}
        >
        <span className="absolute -right-2 -top-2 rounded-full border border-emerald-400/40 bg-emerald-950/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-300 shadow-glow">
          Live
        </span>
        <Image
          src="/images/toni-guy-right.png"
          alt="TONI&GUY logo"
          fill
          sizes="240px"
          className="object-contain p-2 brightness-110 contrast-125 saturate-140"
          draggable={false}
        />
      </div>
    </div>
  );
}
