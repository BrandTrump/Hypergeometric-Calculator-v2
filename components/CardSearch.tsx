"use client";

import { getCardSearch } from "@/helpers/getCardSearch";
import { FormEvent, useState } from "react";
import SearchedCard from "./SearchedCard";

function CardSearch() {
  const [cardSearch, setCardSearch] = useState("");
  const [searchedData, setSearchedData] = useState<CardInformation | null>(
    null
  );
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchData = await getCardSearch(cardSearch);
    return setSearchedData(searchData);
  };
  return (
    <section className="bg-green-500 p-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="text-black"
          onChange={(e) => setCardSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchedData && <SearchedCard searchedData={searchedData} />}
    </section>
  );
}

export default CardSearch;
