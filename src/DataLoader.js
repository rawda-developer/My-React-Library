import React, { useEffect, useState } from 'react';

export const DataLoader = ({
  resourceName,
  getData = async () => {},
  children,
}) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setState(data);
    })();
  }, [getData]);
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
