import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{'textAlign': 'left'}}>
      <h2>Home Page</h2>
      <ul>This is a sample App of use of this <b>React</b> packages:
        <br/>
        <br/>
        <li>
          <b>React Router v6:</b> Client-side routing.
          <p>You can test the use of this package by clicking 
            the &nbsp;
            <Link to='invoices' style={{ color:'lightblue' }}>
              Invoices
            </Link> 
            &nbsp; link on the Navbar.</p>
        </li>
        <li>
        <b>Recoil:</b> State management.
        <p>You can test the use of this package by clicking 
          the &nbsp;
          <Link to='todoListRecoil' style={{ color:'lightblue' }}>
            ToDo List
          </Link> 
          &nbsp; link on the Navbar.</p>
        </li>
      </ul>
    </div>
  );
}

export default Home;
