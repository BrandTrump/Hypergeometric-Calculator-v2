import CardGrid from "@/components/CardGrid";
import CardSearch from "@/components/CardSearch";
import Container from "@/components/Container";
import { getCardData } from "@/helpers/getCardData";

async function DeckPage({ params }: { params: { cardIds: string } }) {
  const cardData = await getCardData(params.cardIds);
  const deckSize = params.cardIds.split("%2C").length;
  const cardArr = params.cardIds.split("%2C");

  return (
    <Container>
      <CardGrid cardData={cardData} deckSize={deckSize} cardIds={cardArr} />
      <CardSearch />
    </Container>
  );
}

export default DeckPage;
