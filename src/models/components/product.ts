type PriceModel = {
  currency: string;
  amount: number;
  decimals: string;
};

type ItemsModel = {
  id: string;
  title: string;
  price: PriceModel;
  thumbnail: string;
  condition: string;
  free_shipping: boolean;
};

export type ProductTileModel = {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: ItemsModel[];
};
