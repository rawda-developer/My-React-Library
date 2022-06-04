export const PersonItem = ({ person }) => {
  return (
    <>
      <h1>{person.name}</h1>
      <p>{person.username}</p>
      <p>{person.email}</p>
    </>
  );
};
