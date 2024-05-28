import { useEffect, useInsertionEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/navbar.jsx'
import { v4 as uuidv4 } from 'uuid';
// import './App.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete} from "react-icons/md";
function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showfinished, setshowfinished] = useState(true)
  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if (todostring) {
      let t = JSON.parse(localStorage.getItem("todos"))
      settodos(t)
    }
  }, [])

  const Togglefinished =(e) => {
    setshowfinished(!showfinished)
  }


  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const handledelete = (id) => {
    let newtodos = todos.filter((item) => {
      return item.id != id;
    }
    );
    saveToLS();
    settodos(newtodos)
  }
  const handleedit = (id) => {
    let t = todos.filter(i => i.id == id);
    settodo(t[0].todo)
    let newtodos = todos.filter((item) => {
      return item.id != id;
    }
    );
    settodos(newtodos)
    saveToLS();
  }
  const handleadd = () => {
    if (todo.trim() !== "") {
      settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
      settodo("")
      saveToLS();
    }
  }

  const handlechange = (e) => {
    // console.log(e.target.value); // log the value of the event target
    if (e.target.value !== "") {
      settodo(e.target.value);
    }
  }
  const handlecheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item) => {
      return item.id === id
    }
    )
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos)
    saveToLS();
  }

  return (
    <>
      <div className="body bg-back h-screen overflow-scroll">

        <Navbar />
        <div className="md:container md:mx-auto bg-secbg rounded-[1.75rem] my-5  p-4 md:w-1/2 min-h-[80%]" >
          <h1 className='font-bold flex text-center justify-center text-2xl '>Taskido-Manage All task At One Place  </h1>
          <div className="addtodo text-lg  my-4">
            <h1 className='mt-2 ml-3 text-lg'>Add Tasks</h1>
            <input onChange={handlechange} value={todo} type="text" className=' rounded-full text-xl px-2 w-[75%]' />
            <button onClick={handleadd} disabled={todo.length<=3} className='bg-font hover:bg-blue-500 font-bold rounded-full px-5 ml-1 text-lg'>Save</button>
          </div>
          <input onChange={Togglefinished} id='show'  type="checkbox" checked={showfinished}  /> <label className='mx-2' htmlFor="show">Show Finished</label>
          <div className='h-0.5 bg-back mt-5 mx-0 mb-3 opacity-45'>-</div>
          <div className="todos">
            {todos.length === 0 && <div className='font-bold text-2xl text-center items-center justify-center'>NO TASKS TO DISPLAY</div>}
            {todos.map(item => {
              return (showfinished || item.isCompleted===false) && <div key={item.id} className="todo flex bg-frnt  p-2 justify-between rounded-[1.75rem] my-2">
                <div className='flex gap-5 items-start'>
                  <input  name={item.id} onChange={handlecheckbox} checked={item.isCompleted} type="checkbox" id="green-checkbox" />
                  <div className={item.isCompleted ? "line-through" : "" + "font-bold"}>{item.todo}</div>
                </div>
                <div className="buttons flex items-start">
                  <button onClick={(e) => handleedit(item.id)} className='bg-font hover:bg-blue-500 transition-all font-bold   rounded-lg p-1 px-4  mx-1'><FaEdit/></button>
                  <button onClick={() => { handledelete(item.id) }} className='bg-font hover:bg-blue-500 transition-all font-bold  rounded-lg p-1 px-4  mx-1'><MdDelete/></button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
