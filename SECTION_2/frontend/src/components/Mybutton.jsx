import React from 'react'

const Mybutton = ({ children, dis }) => {
  return (
   <button disabled={dis} className='bg-violet-500 disabled:bg-amber-600 text-white p-5 rounded-xl'>
    {children}
   </button>
  )
}

export default Mybutton