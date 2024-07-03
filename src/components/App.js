import React from "react";

import UserList from './users/UserList';
import Notes from './notes/Note';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Demo app</h1>
      </header>
      <main>
        <UserList />
        <Notes/>
      </main>
    </div>
  );
}

export default App;
