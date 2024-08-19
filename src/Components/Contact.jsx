import React from 'react'

const Contact = () => {
  return (
    <div >
    <h2 className='text-2xl font-bold mb-4'>Contact</h2>
    <form >
    <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input type="text" placeholder='Enter Name' className='w-full px-3 py-2 border'/>
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border'/>
        </div> 
        <div className='mb-4'>
            <label className='block text-gray-700'>Description</label>
            <textarea type="text" placeholder='Descripton' className='w-full px-3 py-2 border' />
        </div>
       
        <div className='mb-4'>
            <button type='submit' className='w-full bg-red-600 text-white py-2 hover:bg-red-700'>Send</button>
        </div>
    </form>
    
</div>
  )
}

export default Contact