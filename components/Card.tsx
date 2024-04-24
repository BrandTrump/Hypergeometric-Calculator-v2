import { getCardData } from "@/helpers/getCardData";
import React from "react";
import Draggable from "./Draggable";

export default async function Card({ cardIds }: { cardIds: string }) {
  const cardData = await getCardData(cardIds);
  return (
    <div className="flex flex-col gap-2">
      {cardData.data.map((card: CardData) => (
        <Draggable key={card.id} id={card.name}>
          {card.name}
        </Draggable>
      ))}
    </div>
  );
}
