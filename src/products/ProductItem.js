export const ProductItem = ({ product }) => {
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </>
  );
};
