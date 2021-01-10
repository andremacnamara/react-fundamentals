// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const usernameInput = React.useRef(null);
  const [error, setError] = React.useState();

  function handleSubmit(e){
    e.preventDefault();
    // const username = e.target.elements.usernameInput.value;
    onSubmitUsername(usernameInput.current.value);
  }

  function handleChange(e){
    const { value } = e.target;
    const isValid = value === value.toLowerCase();
    setError( isValid ? null : 'Username must be lowercase');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="usernameInput" ref={usernameInput} onChange={handleChange}/>
      </div>
      <div style={{ color: 'red' }}>{error}</div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
