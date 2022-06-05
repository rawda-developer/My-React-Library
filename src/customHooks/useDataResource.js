import { useState, useEffect } from 'react';
export const useDataResource = (getDataFunc) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);

  return state;
};
