import React, { useState } from 'react';

function FormHandling() {
  const [val, setVal] = useState({ name: '', age: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Name:", val.name);
    console.log("Age:", val.age);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={val.name}
        onChange={(e) => setVal({ ...val, name: e.target.value })}
        placeholder="name"
        type="text"
      />
      <input
        value={val.age}
        onChange={(e) => setVal({ ...val, age: e.target.value })}
        placeholder="age"
        type="text"
      />
      <input type="submit" />
    </form>
  );
}

export default FormHandling;
