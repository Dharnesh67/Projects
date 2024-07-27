import { BookPlus, LibraryBig, LineChart, MessageSquare } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Createform from './Createform'
import Link from 'next/link'
const sidenav = () => {
  const menulist = [
    {
      id: 1,
      name: "my forms",
      icon: LibraryBig,/// Lucide react icons,
      path: "/dashboard"
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageSquare,/// Lucide react icons,
      path: "/dashboard/responses"
    },
    {
      id: 3,
      name: "Analytics",
      icon: LineChart,/// Lucide react icons,
      path: "/dashboard/analytics"
    },
    {
      id: 4,
      name: "Upgrade",
      icon: BookPlus,/// Lucide react icons,
      path: "/dashboard/upgrade"
    },
  ]
  const path = usePathname();
  useEffect(() => {
    console.log(path)
  }, [path])
  return (
    <div className='h-[92vh] rounded-xl shadow-md border-r-2'>
      {menulist.map((item) => (
        <Link href={`/${item.name}`}>
          <div key={item.id} className={`flex items-center p-5 hover:bg-primary hover:text-white cursor-pointer gap-[10%] hover:shadow-md
         rounded-r-xl ${path == item.path && 'bg-primary text-white'}`}>
            <item.icon className='mr-2' size={24} />
            <span className='font-bold capitalize'>{item.name}</span>
          </div>
        </Link>
      ))}
      <div className='fixed bottom-10  ml-2 text-white w-56 '>
        <div className='m-2'>
          <Createform />
        </div>
        <Progress value={10} />
        <h2 className='text-black font-thin'><strong>2 out of 3 is Created </strong></h2>
        <h2 className='text-primary font-thin'><strong>Upgrade to premium</strong></h2>
      </div>
    </div>
  )
}

export default sidenav
