import ProductTile from "components/productTile/ProductTile";
import { ProductTileModel } from "@models/components/product";
import { GetServerSideProps } from "next";
import api from "services/api";

const ProductListPage = (data: any) => {
  const respData = Object.values(data);
  console.log("kiyoshi", respData);
  return (
    <div>
      {respData.length
        ? respData.map((dt: ProductTileModel) => (
            <ProductTile
              id={dt.id}
              title={dt.title}
              price={dt.prices.amount}
              currency={dt.prices.currency_id}
              thumbnail={dt.thumbnail}
              address_state={dt.address.state_name}
            />
          ))
        : null}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
  req,
}) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
  const ITEMS_PATH = process.env.NEXT_PUBLIC_ITEMS_PATH || "/api/items";

  try {
    const { data } = await api.get(
      `${BASE_URL}${ITEMS_PATH}?q=${query.search}`
    );

    return {
      props: { ...data },
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error: ${error.message}`);
    }
  }
};

export default ProductListPage;
