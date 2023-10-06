type DeckListProps = {
  cardData: CardInformation;
};

function DeckList({ cardData }: DeckListProps) {
  return (
    <article className="bg-blue-500 p-2">
      {cardData.data.map((card: CardData) => (
        <h1 key={card.id}>{card.name}</h1>
      ))}
    </article>
  );
}

export default DeckList;
