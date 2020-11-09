import logo from './logo.svg';
import './App.css';
import * as nums from './numbers.js';

const name = 'Olga';
const newNumber = nums.count * nums.length;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with WHS
        </a>
        <p>
          {newNumber}
        </p>
        <p style={{
          color:'red'
        }}>
          Zyabrova Olga
        </p>
        <p>
          {name}
        </p>
        <p>
          {23}
        </p>
        <p>
          {23-1}
        </p>
        <p>
          {name && 'Name is true'}
        </p>
        <p>
          {name ? 'Name is true' : 'Olga is false'}
        </p>
        <p>
          {undefined}
          {null}
          {false}
          {true}
        </p>
      </header>
    </div>
  );
}

export default App;
