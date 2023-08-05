"use client";
import { useCardStore } from "@/store/card-store";

function RemoveAllButton() {
  const {
    selectedCards,
    resetSelectedCardState,
    resetCalculationState,
    resetAmtState,
    resetMinState,
    resetMaxState,
  } = useCardStore();

  const handleRemoveAll = () => {
    resetSelectedCardState();
    resetCalculationState();
    resetAmtState();
    resetMinState();
    resetMaxState();
  };

  return (
    <button
      onClick={handleRemoveAll}
      disabled={selectedCards.length === 0}
      className="bg-gray-300 border border-black rounded-md font-semibold hover:bg-gray-400 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed px-3 py-1 text-black w-full md:w-auto"
    >
      Remove All
    </button>
  );
}

export default RemoveAllButton;
