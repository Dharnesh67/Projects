import React from 'react'
import Callpagefooter from '../UI/callpagefooter/callpagefooter';
import Callpageheader from '../UI/callpageheader/callpageheader';
import Meetinginfo from '../UI/meetinginfo/meetinginfo';
import Messenger from '../UI/Messenger/Messenger';
const Callpage = () => {
  const title=location.pathname.replace('/','');
  return (
    <div>
      <div className="callpageconatiner">
        <video className='video-container h-screen w-screen absolute z-[-1] object-cover top-0 left-0' src="" controls ></video>
        <Callpageheader/>
        <Messenger/>
        <Meetinginfo/>
        <Callpagefooter/>
      </div>
    </div>
  )
}

export default Callpage
