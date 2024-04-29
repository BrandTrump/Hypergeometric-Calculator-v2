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

type BoardProps = {
  cardData: CardInformation;
};

export default function Board({ cardData }: BoardProps) {
  const containers = ["A", "B"];
  const [parent, setParent] = useState<UniqueIdentifier>("A");
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    if (!over) {
      return;
    }
    setParent(over.id);
    setActiveId(null);
    console.log(over.id, activeId);
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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

        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? (
              <div className="flex flex-col gap-3 p-2">
                {cardData.data.map((card) => (
                  <Draggable key={card.id} id={JSON.stringify(card.id)}>
                    <Card name={card.name} />
                  </Draggable>
                ))}
              </div>
            ) : (
              "Drop here"
            )}
          </Droppable>
        ))}

        <div></div>
      </div>
    </DndContext>
  );
}
