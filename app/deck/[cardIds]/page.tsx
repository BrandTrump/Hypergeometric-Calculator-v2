"use client";
import CardSearch from "@/components/CardSearch";
import Container from "@/components/Container";
import DeckList from "@/components/DeckList";
import { useState } from "react";
import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import Draggable from "@/components/Draggable";
import Droppable from "@/components/Droppable";
import Card from "@/components/Card";

function DeckPage({ params }: { params: { cardIds: string } }) {
  const deckSize = params.cardIds.split("%2C").length;

  const containers = ["A", "B"];
  const [parent, setParent] = useState<UniqueIdentifier>("A");

  const handleDragEnd = (e: DragEndEvent) => {
    const { over } = e;

    if (!over) {
      return;
    }
    setParent(over.id);
  };

  const draggableMarkup = <Draggable id="draggable">Card Name</Draggable>;

  return (
    <Container>
      <main className="border border-gray-500 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90 mt-36 md:mt-32">
        <div className="p-2 bg-gray-800 mb-2">
          <h1 className="font-semibold text-white">Deck</h1>
        </div>
        <div className="flex items-center p-2 bg-gray-800">
          <h2 className="font-semibold text-white">Main Deck</h2>
          <p className="font-semibold text-white ml-12">{deckSize}</p>
        </div>
        {/* <section className="grid grid-cols-4 border-orange-500 border-2 divide-orange-500 divide-x-2 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90">
          <CardSearch />
          <Suspense fallback={<div>Loading...</div>}>
            <DeckList cardIds={params.cardIds} />
          </Suspense>
          <div></div>
          <div></div>
        </section> */}
        <DndContext onDragEnd={handleDragEnd}>
          {parent === null ? draggableMarkup : null}
          <div className="grid grid-cols-4 border-orange-500 border-2 divide-orange-500 divide-x-2 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90">
            <CardSearch />
            {containers.map((id) => (
              <Droppable key={id} id={id}>
                {parent === id ? draggableMarkup : "Drop here"}
              </Droppable>
            ))}
            <div></div>
          </div>
        </DndContext>
      </main>
    </Container>
  );
}

export default DeckPage;
