import React, { useEffect, useState } from 'react';
import axios from 'axios';
export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get('/current-user').then((res) => setUser(res.data));
  }, []);
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
