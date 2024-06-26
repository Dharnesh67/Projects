
"use client"
import React from 'react'
import { SignedIn } from '@clerk/clerk-react'
import Sidenav from './_components/sidenav'
import { usePathname } from 'next/navigation'
const Dashlayout = ({ children }) => {
    return (
        <div>
            {/* we will put the dashboard inside signed in tag to protect */}
            <div className='md:w-64'>
                <Sidenav />
            </div>
            <div className='md:ml-64'><SignedIn>
                {children}
                 </SignedIn>
            </div>
        </div>
    )
}

export default Dashlayout
