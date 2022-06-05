import { useDataResource } from '../customHooks/useDataResource';
import axios from 'axios';
const getProduct = (url) => async () => {
  const { data } = await axios.get(url);
  console.log(data);
  return data;
};
export const ProductInfo = ({ productId }) => {
  const product = useDataResource(getProduct(`/products/${productId}`));
  console.log(product);
  const { name, price, description, rating } = product || {};

  return (
    <>
      {product ? (
        <>
          <h3>{name}</h3>
          <p>{price}</p>
          <h3>Description:</h3>
          <p>{description}</p>
          <p>Average Rating: {rating}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
