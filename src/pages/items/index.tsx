import ProductTile from "components/productTile/ProductTile";
import BreadCrumb from "components/breadCrumb/BreadCrumb";
import { ProductTileModel } from "@models/components/product";
import { GetServerSideProps } from "next";
import api from "services/api";

type ProductListPageProps = {
  data: ProductTileModel;
};

const ProductListPage = (data: ProductListPageProps) => {
  const respData = data.data;
  console.log(respData);
  return (
    <div className="product-list-page-container">
      <BreadCrumb breadCrumb={respData.categories} />
      <div className="product-list-page-box">
        {respData.items.length
          ? respData.items.map((dt) => (
              <ProductTile
                id={dt.id}
                title={dt.title}
                price={dt.price.amount}
                currency={dt.price.currency}
                thumbnail={dt.thumbnail}
                condition={dt.condition}
                free_shipping={dt.free_shipping}
              />
            ))
          : null}
      </div>
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
