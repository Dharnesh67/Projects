import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
const header = () => {
  return (
    <div className='h-[8vh] rounded-sm shadow-sm shadow-primary'>
      <div className='flex justify-between items-center h-full px-8'>
        <div><Image src="/logo.svg" alt="Logo" width={40} height={50} /></div>
        <div className='flex items-center space-x-4'>
          <Button>Get Started</Button>
          <Button>Sign in</Button>
        </div>
      </div>
    </div>
  )
}

export default header