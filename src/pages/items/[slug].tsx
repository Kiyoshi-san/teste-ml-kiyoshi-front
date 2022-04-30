import { Image } from "@components/ui/image";
import { ProductDetailsPageModel } from "@models/components/product";
import { GetServerSideProps } from "next";
import api from "services/api";
import Currency from "react-currency-formatter";
import { BreadCrumb } from "@components/breadCrumb";
import { useSelector } from "react-redux";

const ProductDetailsPage: React.FC<ProductDetailsPageModel> = (data) => {
  const {
    item: {
      id,
      title,
      price: { currency, amount },
      picture,
      condition,
      sold_quantity,
      description,
    },
  } = data;

  const { breadCrumb } = useSelector((state: any) => state.searchBar);

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
              <h2>Descripcion del Producto</h2>
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
            <Currency quantity={amount} currency={currency} />
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
