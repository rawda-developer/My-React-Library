import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get(`/users/${userId}`).then((res) => setUser(res.data));
  }, [userId]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
