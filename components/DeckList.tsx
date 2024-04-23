import { getCardData } from "@/helpers/getCardData";

async function DeckList({ cardIds }: { cardIds: string }) {
  const cardData = await getCardData(cardIds);
  return (
    <article className="p-2 space-y-2 ">
      {cardData.data.map((card: CardData) => (
        <div
          key={card.id}
          className="bg-white border-black border rounded-lg p-2 text-center"
        >
          <h1 className="text-black">{card.name}</h1>
        </div>
      ))}
    </article>
  );
}

export default DeckList;
