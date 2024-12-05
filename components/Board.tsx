"use client";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import CardSearch from "./CardSearch";
import { useState } from "react";
import Droppable from "./Droppable";
import Card from "./Card";
import Draggable from "./Draggable";
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
      {/* <div className="flex flex-col gap-2 p-2">
          {cardData.data.map((card) => (
            <Draggable key={card.id} id={card.id.toString()}>
            <Card name={card.name} />
            </Draggable>
            ))}
            </div>
            
            <DragOverlay>
            {activeId ? <Card name={activeId.toString()} /> : "Drop Here"}
            </DragOverlay> */}

      <DndContext onDragEnd={handleDragEnd} id="card-dnd">
        {containers.map((container) => (
          // <Droppable key={container.id} id={container.id}>
          //   <div className="flex flex-col gap-3 p-2">
          //     {cards.map((card) => (
          //       <Draggable key={card.id} id={JSON.stringify(card.id)}>
          //         <Card name={card.name} />
          //       </Draggable>
          //     ))}
          //   </div>
          // </Droppable>
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
