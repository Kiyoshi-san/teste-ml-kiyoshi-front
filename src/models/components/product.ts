type PriceModel = {
  currency: string;
  amount: number;
  decimalss: string;
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

export type ProductDetailsPageModel = {
  author: {
    name: string;
    lastname: string;
  };
  items: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: string;
    };
    picture: string;
    condition: string;
    sold_quantity: number;
    description: string;
  };
};
