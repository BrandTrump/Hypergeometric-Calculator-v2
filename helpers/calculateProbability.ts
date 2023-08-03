import math from "mathjs";
import { getDuplicates } from "./getDuplicates";

export function calculateProbability(
  amt: number[],
  min: number[],
  max: number[],
  handSize: number,
  deckSize: number
) {
  let totalProbability = 0;

  // Calculate probability for each card type
  for (let i = 0; i < amt.length; i++) {
    let cardTypeProbability = 0;

    // Adjusted max value for the current card type
    const adjustedMax = Math.min(max[i], handSize - min[i]);

    for (let drawnCards = min[i]; drawnCards <= adjustedMax; drawnCards++) {
      if (drawnCards <= handSize) {
        const combinationsWithCard = calculateCombinations(amt[i], drawnCards);
        const combinationsWithoutCard = calculateCombinations(
          deckSize - amt[i],
          handSize - drawnCards
        );
        cardTypeProbability +=
          (combinationsWithCard * combinationsWithoutCard) /
          calculateCombinations(deckSize, handSize);
      }
    }

    totalProbability += cardTypeProbability;
  }

  return (totalProbability * 100).toFixed(2);
}

function calculateCombinations(n: number, k: number) {
  if (k === 0) return 1;

  let result = 1;

  for (let i = 0; i < k; i++) {
    result *= (n - i) / (i + 1);
  }

  return result;
}
