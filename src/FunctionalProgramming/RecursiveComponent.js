const isObject = (obj) => obj !== null && typeof obj === 'object';
export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }
  const entries = Object.entries(data);
  return (
    <ul>
      {entries.map(([key, value]) => (
        <li key={key}>
          <span>{key}</span>
          <RecursiveComponent data={value} />
        </li>
      ))}
    </ul>
  );
};
