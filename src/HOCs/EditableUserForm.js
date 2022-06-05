import { withEditableUser } from './withEditableUser';
export const EditableUserForm = withEditableUser(
  ({ user, updateUser, resetUser, changUser }) => {
    const { name, age, hairColor } = user || {};
    return user ? (
      <>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => changUser({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type='number'
            value={age}
            onChange={(e) => changUser({ age: Number(e.target.value) })}
          />
        </label>
        <label>
          Hair Color:
          <input
            type='text'
            value={hairColor}
            onChange={(e) => changUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={updateUser}>Update</button>
        <button onClick={resetUser}>Reset</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  '123'
);
