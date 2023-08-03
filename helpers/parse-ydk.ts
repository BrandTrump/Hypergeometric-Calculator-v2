export function parseYDK(content: any) {
  const lines = content.split("\n");
  const mainDeck = [];
  let isExtraDeck = false;
  let isSideDeck = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === "#extra") {
      isExtraDeck = true;
      isSideDeck = false;
    } else if (line === "!side") {
      isExtraDeck = false;
      isSideDeck = true;
    } else if (line.length > 0 && !line.startsWith("#")) {
      const cardId = parseInt(line);
      if (!isNaN(cardId) && !isExtraDeck && !isSideDeck) {
        mainDeck.push(cardId);
      }
    }
  }

  const mainDeckIds = [...mainDeck].join(",");

  return mainDeckIds;
}
