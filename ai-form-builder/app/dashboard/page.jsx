import React from 'react'
import { Button } from '@/components/ui/button'
import Createform from './_components/Createform'
function Dashboard() {
  return (
    <div className='p-10'>
      <div className="font-bold flex items-center justify-between ">
        <h1 className="text-3xl">Dashboard</h1>
        <Createform/>
      </div>
    </div>
  )
}

export default Dashboard
