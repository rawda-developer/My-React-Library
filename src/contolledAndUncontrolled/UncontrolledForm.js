import React from 'react';
export const UncontrolledForm = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();
  const submitForm = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
  };

  return (
    <form onSubmit={submitForm}>
      <label>Name:</label>
      <input type='text' ref={nameInput} />
      <label>Age:</label>
      <input type='number' ref={ageInput} />
      <label>Hair Color:</label>
      <input type='text' ref={hairColorInput} />
      <button type='submit'>Submit</button>
    </form>
  );
};
