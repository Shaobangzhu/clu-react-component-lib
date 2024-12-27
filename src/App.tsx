import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <h2>YMCA</h2>
        <h3>Typescript YYDS</h3>
        <hr/>
        <code>
          const fibonacci = fibo(n - 1) + fibo(n - 2);
        </code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;