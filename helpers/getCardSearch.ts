export async function getCardSearch(cardSearch: string) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${cardSearch}&misc=yes&urls`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
