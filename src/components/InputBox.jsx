import React from 'react'
import { useMyContext } from '../context/Context'

function InputBox() {  
    const {addDetails, saveDetails, inputName, setInputName, inputEmail, setInputEmail, inputContact, setInputContact, editFlag, setEditFlag, editId, setEditId} = useMyContext()
    
    const addFn = () =>{
        if(inputName === '')
            alert("Please Enter a Name")
        else if(inputEmail === '')
            alert("Please Enter an Email")
        else if(inputContact === '')
            alert("Please Enter a Contact No.")
        else {
            // console.log(name.value, email.value, contact.value)
            if(editFlag) {
                saveDetails(editId, inputName, inputEmail, inputContact)
                setEditFlag(false)
            }
            else
                addDetails(inputName, inputEmail, inputContact)
            
            setInputName('')
            setInputEmail('')
            setInputContact('')
        }
    }

  return (
    <div className='flex flex-col gap-5 bg-gray-900 text-white p-5 md:p-10 w-5/6 sm:w-1/2 md:w-1/2 lg:w-1/3 rounded'>
        <div className='flex flex-col'>
            <label htmlFor="input-name">Enter Name</label>
            <input
            id='input-name'
            type="text"
            className='bg-gray-700 rounded p-2'
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="input-email">Enter Email</label>
            <input
            id='input-email'
            type="email"
            className='bg-gray-700 rounded p-2'
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="input-contact">Enter Contact No.</label>
            <input
            id='input-contact'
            type="number"
            className='bg-gray-700 rounded p-2'
            value={inputContact}
            onChange={(e) => setInputContact(e.target.value)}
            />
        </div>
        <div className='flex justify-center'>
            <button onClick={addFn} className="bg-gray-600 hover:bg-gray-800 px-3 py-2 rounded">{editFlag ? 'SAVE' : 'ADD'}</button>
        </div>
    </div>
  )
}

export default InputBox