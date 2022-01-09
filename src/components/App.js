import React , {useState,useEffect} from 'react';
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from './ContactList';

// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import './App.css';

function App() {

  const [contacts,setContacts] = useState([])
  const LOCAL_STORAGE_KEY = 'contacts';
  const addcontact = (contact) => {
     setContacts([...contacts,{id: parseInt(contacts.length+1),...contact}]) 
  }

  const deleteContact = (id) => {
    const newList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newList)
  }


   useEffect(() => {
    const retrieved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieved) setContacts(retrieved)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])

  return (
    <div className="ui container">
      <h1>Hello</h1>
      <Header />
      <AddContact addcontact={addcontact} />
      <ContactList contacts={contacts} getDeleteid={deleteContact} />
    </div>
  );
}

export default App;




// [
//   {
//     id:'1',
//     name:'utkarsh',
//     email:'fgdjh@gmail.com',
//   },
//   {
//     id:'2',
//     name:'Hyr',
//     email:'fgfgdjh@gmail.com',
//   }
//   ]