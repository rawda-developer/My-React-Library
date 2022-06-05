import { useState, useEffect } from 'react';
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
      (async () => {
        const { data } = await axios.get(`/users/${userId}`);
        setOriginalUser(data);
        setUser(data);
      })();
    }, []);
    const changUser = (data) => {
      setUser({ ...user, ...data });
    };
    const updateUser = async () => {
      const { data } = await axios.post(`/users/${userId}`, { user });
      setUser(data);
      setOriginalUser(data);
    };
    const resetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        updateUser={updateUser}
        resetUser={resetUser}
        changUser={changUser}
      />
    );
  };
};
