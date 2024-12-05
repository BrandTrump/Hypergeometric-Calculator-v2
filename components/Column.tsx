import { useDroppable } from "@dnd-kit/core";
import React from "react";
import Draggable from "./Draggable";

type ColumProps = {
  container: { id: string; title: string };
  cards: CardData[];
};

export default function Column({ container, cards }: ColumProps) {
  const { setNodeRef } = useDroppable({ id: container.id });
  return (
    <div className="flex max-w-80 flex-col p-3">
      {/* <h2 className="mb-4 font-semibold text-neutral-100">{container.title}</h2> */}
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {cards.map((card) => (
          <Draggable key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
