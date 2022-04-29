import { GetServerSideProps } from "next";
import api from "services/api";

const ProductDetailsPage: React.FC = (data) => {
  console.log(data);
  return (
    <div className="product-details-page-container">Product Details Page</div>
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
