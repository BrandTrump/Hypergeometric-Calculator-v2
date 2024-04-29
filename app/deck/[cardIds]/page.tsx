import Container from "@/components/Container";
import { Suspense } from "react";
import { getCardData } from "@/helpers/getCardData";
import Board from "@/components/Board";

async function DeckPage({ params }: { params: { cardIds: string } }) {
  const deckSize = params.cardIds.split("%2C").length;

  const cardData = await getCardData(params.cardIds);

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
        <Suspense fallback={<div>Loading...</div>}>
          <Board cardData={cardData} />
        </Suspense>
      </main>
    </Container>
  );
}

export default DeckPage;
