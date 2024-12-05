export async function getCardData(cardId: string) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardId}&misc=yes&urls`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const updatedData = data.data.map((card: any) => ({ ...card, status: "A" }));

  return updatedData;
}
