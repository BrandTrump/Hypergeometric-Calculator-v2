type SearchedCardProps = {
  searchedData: CardInformation;
};

function SearchedCard({ searchedData }: SearchedCardProps) {
  return (
    <div className="space-y-2">
      {searchedData.data.slice(1, 10).map((card: CardData) => (
        <div
          key={card.id}
          className="bg-white border-black border rounded-lg p-2 text-center"
        >
          <h1 className="text-black">{card.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default SearchedCard;
