export function getDuplicates(cardIds: string[]) {
  // Step 2: Count occurrences of card IDs
  const idOccurrences: { [id: string]: number } = {};

  for (const cardId of cardIds) {
    if (idOccurrences[cardId]) {
      idOccurrences[cardId]++;
    } else {
      idOccurrences[cardId] = 1;
    }
  }

  // Step 3: Create an object with duplicate counts for each ID
  const duplicateCountPerId: { [id: string]: number } = {};

  for (const id in idOccurrences) {
    if (idOccurrences[id] > 1) {
      duplicateCountPerId[id] = idOccurrences[id];
    }
  }

  return duplicateCountPerId;
}
