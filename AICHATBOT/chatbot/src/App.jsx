import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Chatpage from './components/chatpage';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chatpage",
    element: <Chatpage />,
  },
 
]);

function App() {
  return (
    <div className='bg-black h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
