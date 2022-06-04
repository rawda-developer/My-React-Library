export const ProductItem = ({ product }) => {
  return (
    <>
      <h1>Name: {product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <img src={product.image} alt={product.name} />
    </>
  );
};
