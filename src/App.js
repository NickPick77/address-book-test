import { useState } from "react"

import SearchBar from './components/SearchBar';
import AddContactForm from './components/AddContactForm';

import './App.module.scss';
import ContactsList from "./components/ContactList";

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [newContact, setNewContact] = useState()
  const [update, setUpdate] = useState(false)

  return (
    <div className="App">
      <SearchBar setSearchInput={setSearchInput} />
      <AddContactForm setNewContact={setNewContact} setUpdate={setUpdate} update={update} />
      <ContactsList newContact={newContact} update={update} searchInput={searchInput} setUpdate={setUpdate} />
    </div>
  );
}

export default App;
