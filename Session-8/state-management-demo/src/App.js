import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const [user,setUser] = React.useState({
    name:"Aditya"
  })
  return (
    <div className="App">
      <Header user={user}></Header>
      <h1>Welcome to User Management</h1>
      <Footer user={user}></Footer>
    </div>
  );
}

function Header(props){
  return <p>Welcome {props.user.name}</p>
}

function Footer(props){
  return (<a href={`http://example.com/user/${props.user.name}`}>Go to the User Profile</a>)
}
export default App;
