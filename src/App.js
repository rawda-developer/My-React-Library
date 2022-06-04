import axios from 'axios';
import { DataLoader } from './DataLoader';
import { UserInfo } from './persons/UserInfo';

function App() {
  return (
    <>
      <DataLoader
        resourceName='user'
        getData={async () => {
          const data = await axios.get('/current-user');
          return data.data;
        }}
      >
        <UserInfo />
      </DataLoader>
    </>
  );
}

export default App;
