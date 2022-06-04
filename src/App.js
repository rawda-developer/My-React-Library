import logo from './logo.svg';
import './App.css';
import { SplitLayout } from './SplitLayout';
import { RegularList } from './RegularList';
import { personsData } from './persons/personsData';
import { productsData } from './products/productsData';
import { PersonItem } from './persons/PersonItem';
import { ProductItem } from './products/ProductItem';
export const Left = ({ message }) => (
  <div style={{ backgroundColor: 'red' }}>{message}</div>
);
export const Right = ({ message }) => (
  <div style={{ background: 'green' }}>{message}</div>
);
function App() {
  return (
    <>
      <SplitLayout leftWeight={1} rightWeight={3}>
        <Left message='Navbar' />
        <Right message='Content' />
      </SplitLayout>
      <RegularList
        items={personsData}
        resourceName='person'
        itemComponent={PersonItem}
      />
      <RegularList
        items={productsData}
        resourceName='product'
        itemComponent={ProductItem}
      />
    </>
  );
}

export default App;
