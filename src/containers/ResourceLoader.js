import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    axios.get(resourceUrl).then((res) => setState(res.data));
  }, [resourceUrl]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};
