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
    <section className="p-3">
      <form onSubmit={handleSearch} className="flex max-w-full relative mb-4">
        <input
          type="text"
          className="text-black w-full"
          onChange={(e) => setCardSearch(e.target.value)}
        />
        <button type="submit" className="absolute bg-black right-0 px-2">
          Search
        </button>
      </form>

      {searchedData && <SearchedCard searchedData={searchedData} />}
    </section>
  );
}

export default CardSearch;
