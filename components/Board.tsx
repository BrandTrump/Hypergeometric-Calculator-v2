"use client";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import CardSearch from "./CardSearch";
import { useState } from "react";
import Column from "./Column";

type BoardProps = {
  cardData: CardData[];
};

export default function Board({ cardData }: BoardProps) {
  const containers = [
    { id: "A", title: "Cards" },
    { id: "B", title: "Calc" },
  ];
  const [cards, setCards] = useState<CardData[]>(cardData);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    if (!over) return;

    const cardId = active.id;
    const newStatus = over.id as CardData["status"];

    setCards(() => {
      return cards.map((card) =>
        card.id === cardId ? { ...card, status: newStatus } : card
      );
    });
  }

  return (
    <div className="grid grid-cols-4 border-orange-500 border-2 divide-orange-500 divide-x-2 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90">
      <CardSearch />

      <DndContext onDragEnd={handleDragEnd} id="card-dnd">
        {containers.map((container) => (
          <Column
            key={container.id}
            container={container}
            cards={cards.filter((card) => card.status === container.id)}
          />
        ))}
      </DndContext>

      <div></div>
    </div>
  );
}
