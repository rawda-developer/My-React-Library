export const PersonItem = ({ person }) => {
  return (
    <>
      <h1>Name: {person.name}</h1>
      <p>Usernam: {person.username}</p>
      <p>Email: {person.email}</p>
    </>
  );
};
