function Home() {
  return (
    <div style={{'text-align': 'left'}}>
      <h2>Home Page</h2>
      <ul>This is a sample App of use of this <b>React</b> packages:
        <br/>
        <br/>
        <li>
          <b>React Router v6:</b> Client-side routing.
          <p>You can test the use of this package by clicking 
            the <b>Invoices</b> link on the Navbar.</p>
        </li>
        <li>
        <b>Recoil:</b> State management.
        <p>You can test the use of this package by clicking 
          the <b>TODO List</b> link on the Navbar.</p>
        </li>
      </ul>
    </div>
  );
}

export default Home;
