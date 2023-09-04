"use client";

import { calculateProbability } from "@/helpers/calculateProbability";
import { getDuplicates } from "@/helpers/getDuplicates";
import { useCardStore } from "@/store/card-store";
import { FormEvent } from "react";
import RemoveAllButton from "./RemoveAllButton";

function FormContainer() {
  const {
    selectedCards,
    uploadedCardIds,
    setCardPreview,
    setMax,
    setMin,
    setAmt,
    setHandSize,
    setCalculation,
    min,
    max,
    amt,
    handSize,
    deckSize,
    calculation,
  } = useCardStore();

  const handleCalculation = (
    e: FormEvent<HTMLFormElement>,
    amt: number[],
    min: number[],
    max: number[],
    handSize: number,
    deckSize: number
  ) => {
    e.preventDefault();
    const result = calculateProbability(amt, min, max, handSize, deckSize);
    setCalculation(parseFloat(result));
  };
  return (
    <section className="border border-gray-500 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90 mt-10 flex-1 overflow-y-auto">
      <div className="relative h-full">
        <div className="p-2 bg-gray-800 mb-2">
          <h1 className="font-semibold text-white text-md text-center">
            Probability
          </h1>
        </div>

        <div className="p-6">
          {selectedCards.length === 0 ? (
            <div className="text-center">
              <h1 className="font-semibold animate-pulse">
                Add cards from the preview!
              </h1>
            </div>
          ) : null}

          <form
            className=""
            onSubmit={(e) =>
              handleCalculation(e, amt, min, max, handSize, deckSize)
            }
          >
            {selectedCards.map((card, i) => (
              <div
                key={card.id}
                className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-4 items-center border-x border-[#cbfd00] bg-[#cbfd00]/10 my-3 md:px-3"
              >
                <h1
                  className="text-white font-semibold hover:text-[#cbfd00] transition duration-200 cursor-pointer"
                  onClick={() => setCardPreview(card)}
                >
                  {card.name}
                </h1>
                <div className="flex space-x-1 md:space-x-10 items-center w-full justify-around md:w-auto pb-6 md:pb-0">
                  <div className="flex flex-col items-center">
                    <label>Amt</label>
                    <input
                      type="number"
                      max={
                        getDuplicates(uploadedCardIds)[card.id] > 1
                          ? getDuplicates(uploadedCardIds)[card.id]
                          : 1
                      }
                      min={1}
                      placeholder={
                        getDuplicates(uploadedCardIds)[card.id] > 1
                          ? `${getDuplicates(uploadedCardIds)[card.id]}`
                          : "1"
                      }
                      className="bg-gray-800"
                      required
                      onChange={(e) => {
                        const newAmt: any = [...amt];
                        newAmt[i] = parseInt(e.target.value);
                        setAmt(newAmt);
                      }}
                    />
                  </div>

                  <div className="flex flex-col items-center">
                    <label>Min</label>
                    <input
                      type="number"
                      max={
                        getDuplicates(uploadedCardIds)[card.id] > 1
                          ? getDuplicates(uploadedCardIds)[card.id]
                          : 1
                      }
                      min={1}
                      placeholder="1"
                      className="bg-gray-800"
                      required
                      onChange={(e) => {
                        const newAmt: any = [...min];
                        newAmt[i] = parseInt(e.target.value);
                        setMin(newAmt);
                      }}
                    />
                  </div>

                  <div className="flex flex-col items-center">
                    <label>Max</label>
                    <input
                      type="number"
                      max={
                        getDuplicates(uploadedCardIds)[card.id] > 1
                          ? getDuplicates(uploadedCardIds)[card.id]
                          : 1
                      }
                      min={1}
                      placeholder={
                        getDuplicates(uploadedCardIds)[card.id] > 1
                          ? `${getDuplicates(uploadedCardIds)[card.id]}`
                          : "1"
                      }
                      className="bg-gray-800"
                      required
                      onChange={(e) => {
                        const newAmt: any = [...max];
                        newAmt[i] = parseInt(e.target.value);
                        setMax(newAmt);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col md:flex-row justify-between my-10 items-center border-t pt-4 space-y-4 md:space-y-0">
              <div className="space-x-5">
                <label>Hand Size:</label>
                <input
                  type="number"
                  max={10}
                  min={1}
                  placeholder="5"
                  className="bg-gray-800"
                  required
                  onChange={(e) => setHandSize(parseInt(e.target.value))}
                />
              </div>
              <div className="flex flex-col w-full space-y-2 md:space-y-0 md:w-auto items-end md:flex-row md:space-x-2">
                <RemoveAllButton />
                <button
                  type="submit"
                  disabled={selectedCards.length === 0}
                  className="bg-[#cbfd00] border border-black rounded-md font-semibold hover:bg-[#cafd00a2] transition duration-200 disabled:bg-[#cafd00a2] disabled:cursor-not-allowed px-3 py-1 text-black w-full md:w-auto"
                >
                  Calculate
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="p-2 bg-gray-800 absolute bottom-0 w-full">
          <h1 className="font-semibold text-white text-md text-center">
            Calculation: {calculation}%
          </h1>
        </div>
      </div>
    </section>
  );
}

export default FormContainer;
