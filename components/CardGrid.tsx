"use client";
import cardImg from "@/assets/card.jpg";
import Image from "next/image";
import { useCardStore } from "@/store/card-store";
import CardPreview from "./CardPreview";
import FormContainer from "./FormContainer";
import { getDuplicates } from "@/helpers/getDuplicates";
import { useEffect } from "react";

interface CardGridProps {
  cardData: CardInformation;
  deckSize: number;
  cardIds: string[];
}

function CardGrid({ cardData, deckSize, cardIds }: CardGridProps) {
  const { setCardPreview, cardPreview, setUploadedCardIds, setDeckSize } =
    useCardStore();

  useEffect(() => {
    setUploadedCardIds(cardIds);
    setDeckSize(deckSize);
  }, [setUploadedCardIds, cardIds, setDeckSize, deckSize]);

  return (
    <>
      <main className="border border-gray-500 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90 mt-36 md:mt-32">
        <div className="p-2 bg-gray-800 mb-2">
          <h1 className="font-semibold text-white">Deck</h1>
        </div>
        <div className="flex items-center p-2 bg-gray-800">
          <h2 className="font-semibold text-white">Main Deck</h2>
          <p className="font-semibold text-white ml-12">{deckSize}</p>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6 p-3 max-h-96 overflow-y-auto md:max-h-full">
          {cardData.data.map((card: CardData) => (
            <div key={card.id}>
              <h1
                onClick={() => setCardPreview(card)}
                className="text-white h-40 w-full md:h-32 bg-pink-600 hover:scale-105 transition duration-100 cursor-pointer rounded-sm active:bg-pink-900"
              >
                {card.name}{" "}
                {getDuplicates(cardIds)[card.id] > 1
                  ? `(${getDuplicates(cardIds)[card.id]})`
                  : ""}
              </h1>
              {/* <Image
                src={card.card_images[0].image_url_small}
                alt="card"
                width={100}
                height={100}
                onClick={() => setCardPreview(card)}
                className="hover:scale-105 transition duration-100 cursor-pointer rounded-sm"
              /> */}
            </div>
          ))}
        </section>
      </main>

      {cardPreview.name !== "" ? (
        <div className="flex flex-col md:space-x-10 md:flex-row mb-10">
          <CardPreview />
          <FormContainer />
        </div>
      ) : null}
    </>
  );
}

export default CardGrid;
