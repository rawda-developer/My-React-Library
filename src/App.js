import logo from './logo.svg';
import './App.css';
import { SplitLayout } from './SplitLayout';
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
    </>
  );
}

export default App;
