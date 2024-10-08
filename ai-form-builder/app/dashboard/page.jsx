import React from 'react'
import Createform from './_components/Createform'
import Formlist from './_components/formlist'
function Dashboard() {
  return (
    <div className='p-5'>
      <div className="font-bold flex items-center justify-between ">
        <h1 className="text-3xl">Dashboard</h1>
        <Createform/>
      </div>
     <div className='text-lg font-bold'>
      List of forms
      <Formlist/>
     </div>
    </div>
  )
}

export default Dashboard
