import axios from 'axios';
import { DataLoader } from './DataLoader';
import { UserInfo } from './persons/UserInfo';

function App() {
  const getData = (url) => async () => {
    const data = await axios.get(url);
    return data.data;
  };

  const getLocalStorage = (key) => () => {
    const data = localStorage.getItem(key);
    return data;
  };
  const Text = ({ message }) => {
    return <div>{message}</div>;
  };
  return (
    <>
      <DataLoader resourceName='user' getData={getData('/current-user')}>
        <UserInfo />
      </DataLoader>
      <DataLoader resourceName='message' getData={getLocalStorage('message')}>
        <Text />
      </DataLoader>
    </>
  );
}

export default App;
