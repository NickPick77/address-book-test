const ContactCard = ({ contact, removeContact }) => {
    return (
        <li>
            <h3>{contact.name}</h3>
            <h3>{contact.surname}</h3>
            <p>{contact.number}</p>
            <button onClick={() => removeContact(contact)}>X</button>

        </li>
    )
}

export default ContactCard