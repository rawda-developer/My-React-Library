import { SplitLayout } from './SplitLayout';
import { RegularList } from './RegularList';
import { personsData } from './persons/personsData';
import { productsData } from './products/productsData';
import { PersonItem } from './persons/PersonItem';
import { ProductItem } from './products/ProductItem';
import { NumberedList } from './NumberedList';
import { PersonSmallItem } from './persons/PersonSmallItem';
import { ProductSmallItem } from './products/ProductSmallItem';
import { Modal } from './Modal';
import { UserInfo } from './persons/UserInfo';
import { UserLoader } from './persons/UserLoader';
import { CurrentUserLoader } from './persons/CurrentUserLoader';
import { ProductInfo } from './products/ProductInfo';
import { ResourceLoader } from './ResourceLoader';
export const Left = ({ message }) => (
  <div style={{ backgroundColor: 'red' }}>{message}</div>
);
export const Right = ({ message }) => (
  <div style={{ background: 'green' }}>{message}</div>
);
function App() {
  return (
    <>
      <ResourceLoader resourceUrl='/current-user' resourceName='user'>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl='/products/1234' resourceName='product'>
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
