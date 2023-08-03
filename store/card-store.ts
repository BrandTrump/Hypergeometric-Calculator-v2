import { create } from "zustand";

interface CardStore {
  cardList: CardInformation;
  setCardList: (cardList: CardInformation) => void;
  cardPreview: CardData;
  setCardPreview: (targetCard: CardData) => void;
  selectedCards: CardData[];
  setSelectedCards: (selectedCards: CardData[]) => void;
  uploadedCardIds: string[];
  setUploadedCardIds: (uploadedCardIds: string[]) => void;
  calculation: number;
  setCalculation: (calculation: number) => void;
  amt: number[];
  setAmt: (amt: number[]) => void;
  min: number[];
  setMin: (min: number[]) => void;
  max: number[];
  setMax: (max: number[]) => void;
  handSize: number;
  setHandSize: (handSize: number) => void;
  deckSize: number;
  setDeckSize: (handSize: number) => void;
  resetPreviewState: () => void;
  resetSelectedCardState: () => void;
  resetCalculationState: () => void;
}

const initialPreviewState = {
  cardPreview: {
    id: 0,
    name: "",
    type: "",
    frameType: "",
    desc: "",
    atk: 0,
    def: 0,
    level: 0,
    race: "",
    attribute: "",
    card_images: [],
  },
};

const initialSelectedCardState = {
  selectedCards: [],
};

const initialCalculationState = {
  calculation: 0,
};

export const useCardStore = create<CardStore>((set) => ({
  ...initialPreviewState,
  ...initialSelectedCardState,
  ...initialCalculationState,

  cardList: {
    data: [],
  },
  setCardList: (cardList: CardInformation) => set({ cardList }),

  cardPreview: {
    id: 0,
    name: "",
    type: "",
    frameType: "",
    desc: "",
    atk: 0,
    def: 0,
    level: 0,
    race: "",
    attribute: "",
    card_images: [],
  },
  setCardPreview: (cardPreview: CardData) => set({ cardPreview }),

  selectedCards: [],
  setSelectedCards: (selectedCards: CardData[]) => set({ selectedCards }),

  uploadedCardIds: [],
  setUploadedCardIds: (uploadedCardIds: string[]) => set({ uploadedCardIds }),

  calculation: 0,
  setCalculation: (calculation: number) => set({ calculation }),

  amt: [0],
  setAmt: (amt: number[]) => set({ amt }),

  min: [0],
  setMin: (min: number[]) => set({ min }),

  max: [0],
  setMax: (max: number[]) => set({ max }),

  handSize: 0,
  setHandSize: (handSize: number) => set({ handSize }),

  deckSize: 0,
  setDeckSize: (deckSize: number) => set({ deckSize }),

  resetPreviewState: () => set(initialPreviewState),
  resetSelectedCardState: () => set(initialSelectedCardState),
  resetCalculationState: () => set(initialCalculationState),
}));
