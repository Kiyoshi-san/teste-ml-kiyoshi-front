import { Image } from "components/ui/image";
import { useRouter } from "next/router";
import Currency from "react-currency-formatter";

type ProductTileProps = {
  id: string;
  title: string;
  price: number;
  currency: string;
  thumbnail: string;
  condition: string;
  free_shipping: boolean;
};

const ProductTile: React.FC<ProductTileProps> = ({
  id,
  title,
  price,
  currency,
  thumbnail,
  condition,
  free_shipping,
}) => {
  const router = useRouter();

  const handleProductTileClick = (id: string) => {
    console.log(id);
    id && router.push(`/items/${id}`);
  };

  return (
    <div
      className="product-tile-container"
      onClick={() => handleProductTileClick(id)}
    >
      <div className="product-tile-box">
        <div className="column-one">
          <Image src={thumbnail} alt={title} />
        </div>
        <div className="column-two">
          <div className="price-container">
            <Currency quantity={price} currency={currency} />
          </div>
          <div className="description-container">
            <div className="title-container">{title}</div>
            <div className="complete-container">
              {condition === "new" ? "Novo" : condition}
            </div>
          </div>
        </div>
        <div className="column-three">
          <div className="condition">
            {free_shipping ? "Frete Grátis" : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
