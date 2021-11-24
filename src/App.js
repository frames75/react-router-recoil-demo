import './App.css';
// import ShowTodoList from './showTodoList';
import { Outlet, Link } from 'react-router-dom';

/**
 * Declare state management wraper
 */
import {
  RecoilRoot,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <header className="App-header">
        <h2>
          React Router & Recoil Demo
        </h2>
        <div className="flex-row">
          <a
            className="App-link"
            href="https://reactrouter.com/docs/en/v6/getting-started/tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Router tutorial
          </a> &nbsp; | &nbsp;
          <a
            className="App-link"
            href="https://recoiljs.org/docs/basic-tutorial/intro"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Recoil tutorial
          </a>
        </div>
      </header>
      <div className="App-body">
        <nav className="App-nav">
          <Link 
            style={{ color:'lightblue', display: "block", margin: "0.5rem 0" }}
            to="/">
              Home
          </Link>
          <Link 
            style={{ color:'lightblue', display: "block", margin: "0.5rem 0" }}
            to="/invoices">
              Invoices
          </Link>
          <Link 
            style={{ color:'lightblue', display: "block", margin: "0.5rem 0" }}          
            to="/todoListRecoil">
              ToDo List
          </Link>
        </nav>
        <main className="App-content">
          <Outlet />
        </main>
      </div>
    </div>
    </RecoilRoot>
  );
}

export default App;
