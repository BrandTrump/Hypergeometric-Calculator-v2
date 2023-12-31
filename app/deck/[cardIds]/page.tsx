import CardGrid from "@/components/CardGrid";
import CardSearch from "@/components/CardSearch";
import Container from "@/components/Container";
import DeckList from "@/components/DeckList";
import { getCardData } from "@/helpers/getCardData";

async function DeckPage({ params }: { params: { cardIds: string } }) {
  const cardData = await getCardData(params.cardIds);
  const deckSize = params.cardIds.split("%2C").length;
  const cardArr = params.cardIds.split("%2C");

  return (
    <Container>
      <CardGrid cardData={cardData} deckSize={deckSize} cardIds={cardArr} />
      <section className="grid grid-cols-4 border-orange-500 border-2 divide-orange-500 divide-x-2 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90">
        <CardSearch />
        <DeckList cardData={cardData} />
        <div></div>
        <div></div>
      </section>
    </Container>
  );
}

export default DeckPage;
