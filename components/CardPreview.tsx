"use client";
import level from "@/assets/level.png";
import Image from "next/image";
import { useCardStore } from "@/store/card-store";
import CardModal from "./CardModal";

function CardPreview() {
  const {
    cardPreview,
    selectedCards,
    setSelectedCards,
    amt,
    min,
    max,
    setAmt,
    setMin,
    setMax,
  } = useCardStore();

  const cardColor = {
    monster: "#9f5e1dc0",
    trap: "#af237eb9",
    spell: "#008176b3",
  };

  const addSelectedCard = () => {
    const cardExists = selectedCards.some((card) => card.id === cardPreview.id);

    if (!cardExists) {
      setSelectedCards([...selectedCards, cardPreview]);
    }
  };

  const removeSelectedCard = () => {
    const cardToRemove = selectedCards.find(
      (card) => card.id === cardPreview.id
    );

    if (cardToRemove) {
      const updatedSelectedCards = selectedCards.filter(
        (card) => card.id !== cardPreview.id
      );

      setSelectedCards(updatedSelectedCards);

      const cardIndex = selectedCards.findIndex(
        (card) => card.id === cardPreview.id
      );

      if (cardIndex !== -1) {
        const updatedAmt = [...amt];
        const updatedMin = [...min];
        const updatedMax = [...max];

        updatedAmt.splice(cardIndex, 1);
        updatedMin.splice(cardIndex, 1);
        updatedMax.splice(cardIndex, 1);

        setAmt(updatedAmt);
        setMin(updatedMin);
        setMax(updatedMax);
      }
    }
  };
  return (
    <section className="border border-gray-500 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90 mt-10 w-full md:w-1/3">
      <div
        className="p-2 mb-2"
        style={
          cardPreview.type === "Spell Card"
            ? { backgroundColor: `${cardColor.spell}` }
            : cardPreview.type === "Trap Card"
            ? { backgroundColor: `${cardColor.trap}` }
            : { backgroundColor: `${cardColor.monster}` }
        }
      >
        <h1 className="font-semibold text-white text-lg">{cardPreview.name}</h1>
      </div>

      <div className="p-4 flex justify-between gap-2">
        <CardModal />
        {cardPreview.type !== "Spell Card" &&
        cardPreview.type !== "Trap Card" ? (
          <div className="flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Image src={level} alt="level" width={20} height={20} />
                <h1 className="text-white">{cardPreview.level}</h1>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <h1 className="text-white">Atk:</h1>
                <h1 className="text-white">{cardPreview.atk}</h1>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <h1 className="text-white">Def:</h1>
                <h1 className="text-white">{cardPreview.def}</h1>
              </div>
            </div>
            <div className="space-y-1">
              <button
                disabled={selectedCards.some(
                  (card) => card.id === cardPreview.id
                )}
                className="bg-gray-300 border border-black rounded-md font-semibold hover:bg-gray-400 transition duration-100 disabled:bg-gray-400 disabled:cursor-not-allowed text-black w-full"
                onClick={addSelectedCard}
              >
                Add
              </button>
              <button
                disabled={
                  !selectedCards.some((card) => card.id === cardPreview.id)
                }
                className="bg-gray-300 border border-black rounded-md font-semibold hover:bg-gray-400 transition duration-100 disabled:bg-gray-400 disabled:cursor-not-allowed text-black w-full"
                onClick={removeSelectedCard}
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-end w-25">
            <div className="space-y-1">
              <button
                disabled={selectedCards.some(
                  (card) => card.id === cardPreview.id
                )}
                className="bg-gray-300 border border-black rounded-md font-semibold hover:bg-gray-400 transition duration-100 disabled:bg-gray-400 disabled:cursor-not-allowed text-black w-full"
                onClick={addSelectedCard}
              >
                Add
              </button>
              <button
                disabled={
                  !selectedCards.some((card) => card.id === cardPreview.id)
                }
                className="bg-gray-300 border border-black rounded-md font-semibold hover:bg-gray-400 transition duration-100 disabled:bg-gray-400 disabled:cursor-not-allowed text-black w-full"
                onClick={removeSelectedCard}
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        className="flex items-center p-2"
        style={
          cardPreview.type === "Spell Card"
            ? { backgroundColor: `${cardColor.spell}` }
            : cardPreview.type === "Trap Card"
            ? { backgroundColor: `${cardColor.trap}` }
            : { backgroundColor: `${cardColor.monster}` }
        }
      >
        <h2 className="font-semibold text-white">[{cardPreview.type}]</h2>
      </div>
      <div className="p-4">
        <p className="text-white">{cardPreview.desc}</p>
      </div>
    </section>
  );
}

export default CardPreview;
