import { useState, useEffect } from 'react';
import axios from 'axios';
export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/current-user');
      setCurrentUser(data);
    })();
  }, []);
  return currentUser;
};
