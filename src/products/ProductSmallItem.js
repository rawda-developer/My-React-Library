export const ProductSmallItem = ({ product }) => {
  return (
    <>
      <h1>
        {product.name} - {product.price}
      </h1>
    </>
  );
};
