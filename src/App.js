import axios from 'axios';
import { DataLoader } from './DataLoader';
import { UserInfo } from './persons/UserInfo';

function App() {
  const getData = (url) => async () => {
    const data = await axios.get(url);
    return data.data;
  };
  return (
    <>
      <DataLoader resourceName='user' getData={getData('/current-user')}>
        <UserInfo />
      </DataLoader>
    </>
  );
}

export default App;
