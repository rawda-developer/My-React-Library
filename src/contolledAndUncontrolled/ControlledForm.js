import { useState, useEffect } from 'react';

export const ControlledForm = () => {
  const [nameMessage, setNameMessage] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hairColor, setHairColor] = useState('');
  useEffect(() => {
    if (name.length <= 3) {
      setNameMessage('Name must contain at least 3 characters');
    } else {
      setNameMessage('');
    }
  }, [name]);
  const submitForm = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(age);
    console.log(hairColor);
  };
  return (
    <>
      <form onSubmit={(e) => submitForm(e)}>
        {nameMessage && <p>{nameMessage}</p>}
        <label>Name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age:</label>
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <label>Hair Color:</label>
        <input
          type='text'
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
