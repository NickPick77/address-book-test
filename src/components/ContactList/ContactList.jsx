import { useEffect, useState } from "react"
import ContactCard from "../ContactCard"
import ContactsArray from "../../utils/data"

const ContactsList = ({ newContact, update, searchInput, setUpdate }) => {
    const [ContactsData, setContactsData] = useState(ContactsArray)
    const [filter, setFilter] = useState([])

    useEffect(() => {
        newContact !== undefined && ContactsArray.push(newContact)
        setContactsData(ContactsArray);
        setUpdate(!update)
        },[newContact])

    useEffect(() => {
        const filtered = ContactsData.filter((contact) => contact.name.toLowerCase().includes(searchInput.toLowerCase()))
        setFilter(filtered)
    },[searchInput])

    
    const removeContact = (e) =>{
        const deleted = ContactsArray.filter((contact) => e.name !== contact.name)
        setFilter(deleted)
        setContactsData(deleted)
        setUpdate(!update)
    }

    return (
        <>
            <ul>
                {filter ? filter.map((contact) => <ContactCard contact={contact} key={contact.number} removeContact={removeContact} />) :
                    ContactsData.length && ContactsData.map((contact) => <ContactCard contact={contact} key={contact.number} removeContact={removeContact} />)}

            </ul>
        </>
    )
}

export default ContactsList