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
export const Left = ({ message }) => (
  <div style={{ backgroundColor: 'red' }}>{message}</div>
);
export const Right = ({ message }) => (
  <div style={{ background: 'green' }}>{message}</div>
);
function App() {
  return (
    <>
      <UserLoader userId='123'>
        <UserInfo />
      </UserLoader>
      <UserLoader userId='234'>
        <UserInfo />
      </UserLoader>
      <UserLoader userId='345'>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
