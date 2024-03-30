import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const [user,setUser] = React.useState({
    name:"Aditya"
  })
  return (
    <div className="App">
      <Header name={user.name}></Header>
      <h1>Welcome to User Management</h1>
      <Footer name={user.name}></Footer>
    </div>
  );
}

function Header(props){
  return <p>Welcome {props.name}</p>
}

function Footer(props){
  return (<a href={`http://example.com/user/${props.name}`}>Go to the User Profile</a>)
}
export default App2;
