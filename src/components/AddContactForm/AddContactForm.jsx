import { useState } from "react"

const AddContactForm = ({ setNewContact, setUpdate, update }) => {
    const [userName, setUserName] = useState("")
    const [userSurname, setUserSurname] = useState("")
    const [userNumber, setUserNumber] = useState("")

    const setInput = (e) => {
        e.preventDefault();
        console.log(userName, userSurname, userNumber)
        setNewContact({
            name: userName,
            surname: userSurname,
            number: userNumber
        })
        setUpdate(!update)

    }


    return (
        <>
            <form onSubmit={setInput} >
                <label>Nome</label>
                <input 
                    type="text" 
                    onChange={(e) => setUserName(e.target.value)} 
                    value={userName} 
                    required
                    />
                <label>Cognome</label>
                <input 
                    type="text" 
                    onChange={(e) => setUserSurname(e.target.value)} 
                    value={userSurname} 
                    required
                    />
                <label>Numero di telefono</label>
                <input 
                type="text" 
                onChange={(e) => setUserNumber(e.target.value)} 
                value={userNumber} 
                required></input>
                <input 
                type="submit" 
                value="Aggiungi" 
                />
            </form>
        </>
    )
}

export default AddContactForm