import githubLogo from './assets/github-logo-64px.png';
import './App.css';
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
          React Router v6 & Recoil Demo
        </h2>
        <div className="flex-row">
          <a
            className="App-link"
            href="https://www.frames75.com/2021/ejemplo-react-router.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Router v6 tutorial
          </a> &nbsp; | &nbsp;
          <a
            className="App-link"
            href="https://www.frames75.com/2022/ejemplo-react-recoil.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Recoil tutorial
          </a> &nbsp; | &nbsp;
          <a
            className="App-link"
            href="https://github.com/frames75/react-router-recoil-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img  src={githubLogo} 
                  style={{ verticalAlign: 'bottom'}}
                  height='32px' 
                  width='32px'
                  title="Go to the Github repo" 
                  alt="Go to the Github repo" 
            />
          </a>
        </div>
      </header>
      <div className="App-body">
        <nav className="App-nav">
          <Link 
            style={{ color:'lightblue', display: "block", margin: "0.5rem 0" }}
            to="">
              Home
          </Link>
          <Link 
            style={{ color:'lightblue', display: "block", margin: "0.5rem 0" }}
            to="invoices">
              Invoices
          </Link>
          <Link 
            style={{ color:'lightblue', display: "block", margin: "0.5rem 0" }}          
            to="todoListRecoil">
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
