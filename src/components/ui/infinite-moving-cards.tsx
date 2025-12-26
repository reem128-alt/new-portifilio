"use client";

import { ReactNode, useMemo } from "react";

type Direction = "left" | "right";
type Speed = "slow" | "normal" | "fast";

type InfiniteMovingCardsProps = {
  items: ReactNode[];
  direction?: Direction;
  speed?: Speed;
};

const speedMap: Record<Speed, string> = {
  slow: "45s",
  normal: "30s",
  fast: "15s",
};

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
}: InfiniteMovingCardsProps) {
  const duplicatedItems = useMemo(
    () => [...items, ...items],
    [items]
  );

  if (!items.length) return null;

  return (
    <div className="relative flex w-full items-center overflow-hidden bg-transparent py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background via-background/80 to-transparent" />
      <div
        className="flex w-max gap-6"
        style={{
          animation: `infinite-scroll ${speedMap[speed]} linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`infinite-card-${index}`}
            className="w-80 shrink-0 rounded-2xl border border-border/70 bg-card/70 p-6 shadow-lg backdrop-blur-md"
          >
            {item}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
