import { withEditableResource } from './withEditableResource';

export const EditableResouceForm = withEditableResource(
  ({ user, onUpdateUser, onResetUser, onChangeUser }) => {
    const { name, age, hairColor } = user || {};
    return user ? (
      <>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type='number'
            value={age}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          />
        </label>
        <label>
          Hair Color:
          <input
            type='text'
            value={hairColor}
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={onUpdateUser}>Update</button>
        <button onClick={onResetUser}>Reset</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  '/users/123',
  'user'
);
