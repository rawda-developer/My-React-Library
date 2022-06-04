import logo from './logo.svg';
import './App.css';
import { SplitLayout } from './SplitLayout';
export const Left = () => <div style={{ backgroundColor: 'red' }}>Left</div>;
export const Right = () => <div style={{ background: 'green' }}>Right</div>;
function App() {
  return (
    <>
      <SplitLayout left={Left} right={Right} />
    </>
  );
}

export default App;
