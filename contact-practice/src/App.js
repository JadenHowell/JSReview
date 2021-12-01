import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import UserList from './components/UserList';

function App() {

  const [state, setState] = useState(
    {
      signedIn: false,
      selectedUser: null
    }
  )

  let selectUser = (user) => {
    console.log(user.name, user.id, user.email)
    setState({
      selectedUser: user,
    });
  }

  let toggleSignIn = () => {
    setState(
      {
        signedIn: !state.signedIn
      }
      )
    }

  return (
    <div className="app">
      <Header className="header" signedIn={state.signedIn} onClick={toggleSignIn}/>
      <NavBar />
      <div className="main-content">
        <UserList className="left-col" selectUser={selectUser}/>
      </div>
    </div>
  );
}

export default App;
