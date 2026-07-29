"use client";

import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const DragScroll = forwardRef<HTMLDivElement, Props>(function DragScroll(
  { children, className = "" },
  ref
) {
  const internalRef = useRef<HTMLDivElement>(null);
  const containerRef = (ref as React.MutableRefObject<HTMLDivElement>) ||
    internalRef;

  const isDown = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      isDown.current = true;
      setDragging(true);
      startX.current = e.clientX;
      startScroll.current = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      const dx = e.clientX - startX.current;
      el.scrollLeft = startScroll.current - dx;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDown.current) return;
      isDown.current = false;
      setDragging(false);
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* noop */
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("pointerleave", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("pointerleave", onPointerUp);
    };
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto ${className}`}
      style={{
        cursor: dragging ? "grabbing" : "grab",
        userSelect: dragging ? "none" : undefined,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {children}
    </div>
  );
});
