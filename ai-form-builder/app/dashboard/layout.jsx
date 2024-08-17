"use client"
import React from 'react'
import { SignedIn } from '@clerk/clerk-react'
import Sidenav from './_components/sidenav'
const Dashlayout = ({ children }) => {
    return (
        <div>
            {/* we will put the dashboard inside signed in tag to protect */}
            <div className="flex">
                <div className='md:w-64'>
                <Sidenav />
                </div>
                <div className='w-[80%]'>
                <SignedIn>
                </SignedIn>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Dashlayout
