import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTodo from "./hooks/useTodo";
/*
     upload project and url in same comment 
     comment ... what is SWC  differ from SWC and normal  ( understanding, it's idea, differ)
     

     SWC (Speedy Web Compiler) 
     
     Written in Rust, which makes it extremely fast compared to Babel.
Focuses on performance and speed, aiming to be an order of magnitude faster.
Provides a similar set of features for transforming and compiling JavaScript/TypeScript code.

Written in JavaScript and has been the standard for JavaScript compilation and transformation.
Rich ecosystem with numerous plugins and presets for extensive customization.
Slightly slower in comparison due to being written in JavaScript.

SWC is often chosen for its speed and performance benefits, 
     */

function App() {

  const {
    tasks,
    inputRef,
    editInputRef,
    editIndex,
    handleAdd,
    handleDelete,
    handelClearAll,
    handleCheck,
    handleEdit,
    handleEditConfirm,
  } = useTodo()
  return (
    <main className='bg-main w-dvw min-h-[100vh] bg-cover flex justify-center tasks-center'>
      <div className="container mx-auto border-spacing-0 border max-w-[500px] min-h-[500px] rounded-lg bg-slate-200/90">
      <h1 className='uppercase  text-center'>to do list</h1>
      <div className="ml-12 mt-10 rounded-lg bg-white w-4/6 flex justify-between">
      <input type="text" ref={inputRef}  className='outline-none flex-1 rounded-lg' />
      <button onClick={handleAdd}>Add</button>
      </div>
      <section className='flex flex-col ml-12 mt-5'>
        {tasks.length < 1 ? <h2 className="text-center capitalize">no todo tasks yet</h2>:        
        tasks.map((item,index)=>(
        <section key={index} className=' ' >
          <div className="pr-2 flex my-1 tasks-center justify-between hover:bg-blue-100">
          <div className="flex items-center gap-1 tasks-center hover:underline cursor-pointer " onClick={() => handleCheck(index)}>
        {
          item.checked ?
          <FaCheckCircle color="green"/> :
          <IoCheckmarkCircleOutline/>
        }
         {editIndex === index ? (
                      <input ref={editInputRef} defaultValue={item.text} className="outline-none flex-1 rounded-lg" />
                    ) : (
                      <div className={`${item.checked && "line-through"}`}>{index + 1} - {item.text}</div>
                    )}

        {/* <div className={`${item.checked && "line-through"}`}>{index +1}- {item.text}</div> */}
      </div>
          <div className="flex items-center gap-2">
          {editIndex === index ? (
                      <button onClick={() => handleEditConfirm(index)} className="p-1">update</button>
                    ) : (
                      <>
                        <RiDeleteBin6Line onClick={() => handleDelete(index)} data-tooltip-id="Delete" data-tooltip-content="Delete Item" className="cursor-pointer hover:text-red-500" />
                        <Tooltip id="Delete" />
                        <FaEdit onClick={() => handleEdit(index)} data-tooltip-id="edit" data-tooltip-content="Edit Item" className="cursor-pointer hover:text-yellow-500" />
                        <Tooltip id="edit" />
                      </>
                    )}
          </div>
          </div>
        </section>))}
           
      {tasks.length > 0 &&( <button onClick={()=>handelClearAll()} className="mx-auto w-fit">Clear All</button> )}
      </section>
      </div>
      <ToastContainer 
        autoClose={1000} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
        className='text-white '/>
    </main>
  )
}

export default App
