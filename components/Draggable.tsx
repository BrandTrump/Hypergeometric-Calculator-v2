"use client";
import { useDraggable } from "@dnd-kit/core";
import React from "react";

type DraggableProps = {
  card: CardData;
};

export default function Draggable({ card }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="border border-[#cbfd00] bg-[#cbfd00]/10 md:px-3 py-2 cursor-grab active:cursor-grabbing text-center"
    >
      <p>{card.name}</p>
    </div>
  );
}
