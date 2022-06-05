import { useState, useEffect } from 'react';
import axios from 'axios';
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);
    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);
    const onChange = (newData) => {
      setData({ ...data, ...newData });
    };
    const onUpdate = async () => {
      const response = await axios.post(resourcePath, { [resourceName]: data });
      setData(response.data);
      setOriginalData(response.data);
    };
    const reset = () => {
      setData(originalData);
    };
    const newProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onUpdate${capitalize(resourceName)}`]: onUpdate,
      [`onReset${capitalize(resourceName)}`]: reset,
    };
    return <Component {...props} {...newProps} />;
  };
};
