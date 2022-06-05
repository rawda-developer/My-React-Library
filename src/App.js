import { withUser } from './HOCs/withUser';
import { UserInfo } from './persons/UserInfo';
const UserInfoLoader = withUser(UserInfo, '123');
function App() {
  return (
    <>
      <UserInfoLoader />
    </>
  );
}

export default App;
