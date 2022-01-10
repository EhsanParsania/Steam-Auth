import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         Login with Steam
        </p>
        <a
          className="App-link"
          href="http://localhost:7069/api/auth/steam"
          target="_blank"
          rel="noopener noreferrer"
        >
         Login with Steam
        </a>
      </header>
    </div>
  );
}

export default App;
