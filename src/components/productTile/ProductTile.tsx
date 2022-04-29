import { Image } from "components/ui/image";

type ProductTileProps = {
  id: string;
  title: string;
  price: number;
  currency: string;
  thumbnail: string;
  address_state: string;
};

const ProductTile: React.FC<ProductTileProps> = ({
  id,
  title,
  price,
  currency,
  thumbnail,
  address_state,
}) => {
  return (
    <div className="product-tile-container">
      <div className="column-one">
        <Image src={thumbnail} alt={title} />
      </div>
      <div className="column-two">
        <div className="price-container">{price}</div>
        <div className="description-container">
          <div className="title-container">{title}</div>
          <div className="complete-container">completo</div>
        </div>
      </div>
      <div className="column-three">
        <div className="state">{address_state}</div>
      </div>
    </div>
  );
};

export default ProductTile;
