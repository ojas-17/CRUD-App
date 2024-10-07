import { useState } from "react"
import Details from "./components/Details"
import InputBox from "./components/InputBox"
import { MyProvider } from "./context/Context"

function App() {
  const [details, setDetails] = useState([])
  const [lastId, setLastId] = useState(0)

  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputContact, setInputContact] = useState('')

  const [editFlag, setEditFlag] = useState(false)
  const [editId, setEditId] = useState(0)

  const addDetails = (name, email, contact) => {
    let newDetail = {
      id: lastId + 1,
      name: name,
      email: email,
      contact: contact
    }

    setDetails((prev) => [newDetail, ...prev])

    setLastId(lastId + 1)
  }

  const saveDetails = (id, name, email, contact) => {
    let newEl = {
      id: id,
      name: name,
      email: email,
      contact: contact
    }

    setDetails(prev => prev.map(el => el.id === id ? newEl : el))
  }

  const editDetails = (id) => {
    setEditFlag(true);
    setEditId(id)
    setDetails((prev) => {
      prev.map((el) => {
        if(el.id === id) {
          setInputName(el.name)
          setInputEmail(el.email)
          setInputContact(el.contact)
        }
      })
      return prev
    })
  }

  const deleteDetails = (id) => {
    setDetails((prev) => prev.filter((cur) => cur.id !== id))
  }

  return (
    <MyProvider value={{details, lastId, addDetails, saveDetails, editDetails, deleteDetails, inputName, setInputName, inputEmail, setInputEmail, inputContact, setInputContact, editFlag, setEditFlag, editId, setEditId}}>
      <div className='w-full min-h-screen flex flex-col items-center gap-10 py-12 bg-gray-800 text-white'>
        <h1 className="text-5xl">CRUD APP</h1>
        <InputBox/>
        <Details/>
      </div>
    </MyProvider>
  )
}

export default App
