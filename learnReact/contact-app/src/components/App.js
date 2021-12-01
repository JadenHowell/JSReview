import React, { useState, useEffect } from "react";
import { uuid } from 'uuidv4'
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //useEffect is called whenever the funciton rerenders (usually)
  //However, the second parameter of use effect, following the funciton, is an array
  //useEffect will onyl run when the variables inside that array change.
  //if is an empty array, [], it will only run onMount.
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []); //This function will only run when this page is loaded

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]); //This function will save to local storage anytime our contacts change.

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/> 
    </div>
  );
}

export default App;
