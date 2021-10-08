import React, { useState } from 'react';

function Empat() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLaststname] = useState('');
  const [name, setName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setName(`${firstname} ${lastname}`)
    setFirstname('');
    setLaststname('');
  }

  return (
    <div>
      <h1>The Post</h1>
      <h1>Learn React function</h1>

      <form onSubmit={submitHandler}>
        <label>Firstname</label>
        <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />

        <label>Lastname</label>
        <input type="text" name="lastname" value={lastname} onChange={(e) => setLaststname(e.target.value)} />

        <button type="submit">show</button>
      </form>
      <p>My name is {name ? name : '...'}</p>
    </div>
  )
}

export default Empat;