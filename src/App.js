import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyFirstPage from './MyFirstPage';
import Ant from './Ant';
import Bird from './Bird';
import Cat from './Cat';
import Welcome from './Welcome';


function App() {
  return (
    
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        
          Learn React
        </a>
      </header>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <MyFirstPage />
      </Route>
      <Route exact path="/ant">
        <Ant />
      </Route>
      <Route exact path="/bird">
        <Bird />
      </Route>
      <Route path="/cat">
        <Cat />
      </Route>
      <Route exact path="/welcome">
        <Welcome />
      </Route>
    </BrowserRouter>
  );
}
