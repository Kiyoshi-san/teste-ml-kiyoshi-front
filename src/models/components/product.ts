type PriceModel = {
  amount: number;
  currency_id: string;
};

export type ProductTileModel = {
  id: string;
  title: string;
  prices: PriceModel;
  currency_id: string;
  thumbnail: string;
  address: {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
  };
};
