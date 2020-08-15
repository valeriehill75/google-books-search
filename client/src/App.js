import React from 'react';
import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="">
      <header className="">
        <div>
          <Nav />
          <Books />
        </div>
      </header>
    </div>
  );
}

export default App;
