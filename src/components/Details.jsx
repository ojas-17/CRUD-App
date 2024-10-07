import React from 'react'
import { useMyContext } from '../context/Context'

function Details() {
    let {details ,editDetails, deleteDetails} = useMyContext()
  
    return (
    <div className='flex flex-col bg-gray-900 text-white p-5 w-full sm:w-full md:w-5/6 lg:w-3/4 2xl:w-1/2 rounded'>
        <div className='flex text-xl font-bold'>
            <div className='w-1/4 py-2 flex justify-center items-center border border-white'>Name</div>
            <div className='w-1/4 py-2 flex justify-center items-center border border-white'>Email</div>
            <div className='w-1/4 py-2 flex justify-center items-center border border-white'>Contact No.</div>
            <div className='w-1/4 py-2 flex justify-center items-center border border-white'>
                {/* <div className='w-1/2 h-full flex justify-center items-center border border-white'>
                    <button className='h-full w-full bg-gray-600 hover:bg-gray-800 rounded'>Edit</button>
                </div>
                <div className='w-1/2 h-full flex justify-center items-center border border-white'>
                    <button className='h-full w-full bg-gray-600 hover:bg-gray-800 rounded'>Delete</button>
                </div> */}
            </div>
        </div>

        {details.map((cur) => {
            return (
                <div key={cur.id} className='flex'>
                    <div className='w-1/4 py-2 flex justify-center items-center border border-white'>{cur.name}</div>
                    <div className='w-1/4 py-2 flex justify-center items-center border border-white'>{cur.email}</div>
                    <div className='w-1/4 py-2 flex justify-center items-center border border-white'>{cur.contact}</div>
                    <div className='w-1/4 flex justify-center items-center'>
                        <div className='w-1/2 h-full flex justify-center items-center border border-white'>
                            <button onClick={() => editDetails(cur.id)} className='h-full w-full bg-gray-600 hover:bg-gray-800 rounded'>Edit</button>
                        </div>
                        <div className='w-1/2 h-full flex justify-center items-center border border-white'>
                            <button onClick={() => deleteDetails(cur.id)} className='h-full w-full bg-gray-600 hover:bg-gray-800 rounded'>Delete</button>
                        </div>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default Details