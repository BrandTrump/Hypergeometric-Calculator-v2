type SearchedCardProps = {
  searchedData: CardInformation;
};

function SearchedCard({ searchedData }: SearchedCardProps) {
  return (
    <div>
      {searchedData.data.slice(1, 10).map((card: CardData) => (
        <h1 key={card.id}>{card.name}</h1>
      ))}
    </div>
  );
}

export default SearchedCard;
