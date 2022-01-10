import './App.css';
import SteamLoginIcon from './assets/login-steam.png'
function App() {
  return (
    <div className="App">
      <main className="App-header">
        <div className="steam-container">
          <h3>
            Login with Steam
          </h3>
          <a
            className="App-link"
            href="http://localhost:7069/api/auth/steam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={SteamLoginIcon} alt="Steam Login" />
          </a>
        </div>
      </main>
    </div>
  );
}

export { App };
