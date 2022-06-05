import { useState, useEffect } from 'react';
import axios from 'axios';
export const useResource = (resourceURL) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(resourceURL);
      setState(data);
    })();
  }, [resourceURL]);
  return state;
};
