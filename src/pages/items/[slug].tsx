import { Image } from "@components/ui/image";
import { ProductDetailsPageModel } from "@models/components/product";
import { GetServerSideProps } from "next";
import api from "services/api";
import Currency from "react-currency-formatter";
import { BreadCrumb } from "@components/breadCrumb";
import { useSelector } from "react-redux";
import { Button } from "@components/ui/button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setActiveOverlay,
  setSuggestionList,
} from "redux/reducer/searchBar-slice";

const ProductDetailsPage: React.FC<ProductDetailsPageModel> = (data) => {
  const {
    item: {
      id,
      title,
      price: { currency, amount, decimals },
      picture,
      condition,
      sold_quantity,
      description,
    },
  } = data;

  const dispatch = useDispatch();

  const { breadCrumb } = useSelector((state: any) => state.searchBar);

  const handleClick = () => {
    alert("Adicionado ao carrinho");
  };

  useEffect(() => {
    dispatch(setActiveOverlay(false));
    dispatch(setSuggestionList([]));
  }, []);

  return (
    <div className="product-details-page-container">
      <BreadCrumb breadCrumb={breadCrumb} />
      <div className="product-details-page-box">
        <div className="column-one">
          <div className="pdp-image-container">
            <Image src={picture} alt={title} />
          </div>
          <div className="pdp-description-container">
            <div className="description-title-container">
              <h2>Descripción del Producto</h2>
            </div>
            <div className="description-container">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="column-two">
          <div className="quantity-container">
            Nuevo{" "}
            {`${sold_quantity} ${sold_quantity > 1 ? "vendidos" : "vendido"}`}
          </div>
          <div className="pdp-title-container">
            <h1>{title}</h1>
          </div>
          <div className="pdp-price-container">
            <div className="price-box">
              <Currency
                quantity={amount}
                currency={currency}
                pattern="! ##,### "
              />
            </div>
            <div className="decimals-box">{decimals}</div>
          </div>
          <div className="pdp-button-container">
            <Button text="Comprar" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
  req,
}) => {
  const id = query.slug;
  const NEXT_PUBLIC_BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
  const NEXT_PUBLIC_ITEMS_PATH =
    process.env.NEXT_PUBLIC_ITEMS_PATH || "/api/items";

  const { data } = await api.get(
    `${NEXT_PUBLIC_BASE_URL}${NEXT_PUBLIC_ITEMS_PATH}/${id}`
  );

  return {
    props: { ...data },
  };
};

export default ProductDetailsPage;
