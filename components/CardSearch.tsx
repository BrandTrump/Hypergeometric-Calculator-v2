"use client";

import { getCardSearch } from "@/helpers/getCardSearch";
import { FormEvent, Suspense, useState } from "react";
import SearchedCard from "./SearchedCard";
import toast from "react-hot-toast";

function CardSearch() {
  const [cardSearch, setCardSearch] = useState("");
  const [searchedData, setSearchedData] = useState<CardInformation | null>(
    null
  );
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const searchData = await getCardSearch(cardSearch);
      return setSearchedData(searchData);
    } catch (error) {
      toast.error("No cards found!");
    }
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
      <Suspense fallback={<div>Loading...</div>}>
        {searchedData && <SearchedCard searchedData={searchedData} />}
      </Suspense>
    </section>
  );
}

export default CardSearch;
