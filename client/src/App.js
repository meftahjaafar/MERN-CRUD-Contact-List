//@import...
import React, { useEffect, useState } from 'react'
import { Link, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import './App.css';

import AddOrEdit from './components/AddOrEdit';
import ContactCard from './components/ContactCard';
import { getContacts, addContact, editContact } from './redux/actions/actions';

import 'bootstrap/dist/css/bootstrap.min.css';

//@app arrow function
function App() {

  //@state : (fullName,email,phone,id,edit)
  //&&
  //@setState : (setId,setFullName,setEmail,setPhone,setEdit)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [id, setId] = useState(0)
  const [edit, setEdit] = useState(false)

  //@returns a reference to the dispatch function from the Redux store
  const dispatch = useDispatch()
  //@ extract data from the Redux store state
  const contacts = useSelector(state => state.contacts)
  //@Fetching data from backend server into local state
  useEffect(() => {
    dispatch(getContacts())
  }, []);
  //@function used when we add a new contact
  //@set empty states
  const newContact = () => {
    dispatch(addContact({ fullName, email, phone }))
    setFullName("")
    setEmail("")
    setPhone("")
    setId(0)
    setEdit(false)
  }
  //@function used when we edit a  contact
  //@find contact and set result to states
  const getPerson = (contact) => {
    setFullName(contact.fullName)
    setEmail(contact.email)
    setPhone(contact.phone)
    setId(contact._id)
    setEdit(true)
  }
  //@function used when we confirm editing  contact
  //@update contact and set empty states
  const updateContact = () => {
    dispatch(editContact(id, { id, fullName, email, phone }))
    setFullName("")
    setEmail("")
    setPhone("")
    setId(0)
    setEdit(false)
  }
  //@function used when we click Cancel on Form (edit or add contact)
  //set empty states
  const cancel = () => {
    setFullName("")
    setEmail("")
    setPhone("")
    setId(0)
    setEdit(false)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            <i className="fas fa-list-alt"></i>Contacts List CRUD APP</h3>
          <Link to="/contact-list">
            <button className="btn btn-block btn-primary mt-3">
              <i className="far fa-address-card"></i>Contacts List</button>
          </Link>
          <Link to="/add-contact">
            <button className={edit ? "btn btn-block  btn-primary mt-3" : "btn btn-block  btn-success mt-3"}>
              <i className="fas fa-user-plus"></i>{edit ? "Edit Contact" : "Add Contact"}</button>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <Route path="/contact-list">

            <ul className="list-group my-5">
              <h3 className="text-center">Users List</h3>
              {contacts.map(contact => <ContactCard contact={contact} getPerson={getPerson} key={contact._id} />)}
            </ul>

          </Route>

          <Route path="/(add-contact|edit-contact)"
            render={() => <AddOrEdit fullName={fullName}
              email={email} phone={phone} setFullName={setFullName}
              setEmail={setEmail} setPhone={setPhone}
              action={edit ? updateContact : newContact} edit={edit} cancel={cancel} />} />
        </div>
      </div>


    </div>
  );
}

export default App;
