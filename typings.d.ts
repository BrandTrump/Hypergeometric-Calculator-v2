interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
  image_url_cropped: string;
}

interface CardPrices {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
  coolstuffinc_price: string;
}

interface CardData {
  id: number;
  name: string;
  type: string;
  frameType: string;
  desc: string;
  atk: number;
  def: number;
  level: number;
  race: string;
  attribute: string;
  card_images: CardImage[];
  card_prices: CardPrices[];
  status: string;
}
