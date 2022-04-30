import ProductTile from "components/productTile/ProductTile";
import { useDispatch } from "react-redux";
import BreadCrumb from "components/breadCrumb/BreadCrumb";
import { ProductTileModel } from "@models/components/product";
import { GetServerSideProps } from "next";
import api from "services/api";
import { useEffect } from "react";
import {
  setActiveOverlay,
  setSuggestionList,
} from "redux/reducer/searchBar-slice";
import { setBreadCrumbList } from "redux/reducer/searchBar-slice";

type ProductListPageProps = {
  data: ProductTileModel;
};

const ProductListPage = (data: ProductListPageProps) => {
  const respData = data.data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveOverlay(false));
    dispatch(setSuggestionList([]));
    dispatch(setBreadCrumbList(respData.categories));
  }, []);

  return (
    <div className="product-list-page-container">
      <BreadCrumb breadCrumb={respData.categories} />
      <div className="product-list-page-box">
        {respData.items.length
          ? respData.items.map((dt, index) => (
              <>
                {index <= 3 ? (
                  <ProductTile
                    key={`product-tile-${index}`}
                    id={dt.id}
                    title={dt.title}
                    price={dt.price.amount}
                    currency={dt.price.currency}
                    thumbnail={dt.thumbnail}
                    condition={dt.condition}
                    free_shipping={dt.free_shipping}
                  />
                ) : null}
              </>
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

  const { data } = await api.get(`${BASE_URL}${ITEMS_PATH}?q=${query.search}`);

  return {
    props: { ...data },
  };
};

export default ProductListPage;
