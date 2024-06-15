import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef } from 'react';
import { editIndexAtom, tasksAtom } from './todoAtom';

function MongezAtomTodo() {
  const [tasks, setTasks] = tasksAtom.useState();
  const [editIndex, setEditIndex] = editIndexAtom.useState();
  const inputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (inputRef.current && inputRef.current.value === '') {
      return toast.error('Task cannot be empty');
    }
    if (inputRef.current) {
      setTasks([...tasks, { text: inputRef.current.value, checked: false }]);
      toast.success(`Task ${tasks.length + 1} Added Successfully`);
      // inputRef.current.value = '';
    }
  };

  const handleDelete = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
    toast.error(`Task ${index + 1} Deleted`);
  };

  const handleClearAll = () => {
    setTasks([]);
    toast.error('Tasks Cleared');
  };

  const handleCheck = (index: number) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
    toast.info('Task status changed');
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    toast.warn('Editing Task');
  };

  const handleEditConfirm = (index: number) => {
    if (editInputRef.current) {
      const updatedTasks = tasks.map((task, i) => 
        i === index ? { ...task, text: editInputRef.current!.value } : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
      toast.success('Task Updated Successfully');
    }
  };

  return (
    <>
      <div className="container mx-auto border-spacing-0 border max-w-[500px] min-h-[500px] rounded-lg bg-slate-200/90">
        <h1 className="uppercase text-center">To Do List</h1>
        <div className="ml-12 mt-10 rounded-lg bg-white w-4/6 flex justify-between">
          <input type="text" ref={inputRef} className="outline-none flex-1 rounded-lg" />
          <button onClick={handleAdd}>Add</button>
        </div>
        <section className="flex flex-col ml-12 mt-5">
          {tasks.length < 1 ? (
            <h2 className="text-center capitalize">No to-do tasks yet</h2>
          ) : (
            tasks.map((item, index) => (
              <section key={index} className=" ">
                <div className="pr-2 flex my-1 tasks-center justify-between hover:bg-blue-100">
                  <div
                    className="flex items-center gap-1 tasks-center hover:underline cursor-pointer "
                    onClick={() => handleCheck(index)}
                  >
                    {item.checked ? (
                      <FaCheckCircle color="green" />
                    ) : (
                      <IoCheckmarkCircleOutline />
                    )}
                    {editIndex === index ? (
                      <input
                        ref={editInputRef}
                        defaultValue={item.text}
                        className="outline-none flex-1 rounded-lg"
                      />
                    ) : (
                      <div className={`${item.checked && 'line-through'}`}>
                        {index + 1} - {item.text}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {editIndex === index ? (
                      <button onClick={() => handleEditConfirm(index)} className="p-1">
                        Update
                      </button>
                    ) : (
                      <>
                        <RiDeleteBin6Line
                          onClick={() => handleDelete(index)}
                          data-tooltip-id="Delete"
                          data-tooltip-content="Delete Item"
                          className="cursor-pointer hover:text-red-500"
                        />
                        <Tooltip id="Delete" />
                        <FaEdit
                          onClick={() => handleEdit(index)}
                          data-tooltip-id="Edit"
                          data-tooltip-content="Edit Item"
                          className="cursor-pointer hover:text-yellow-500"
                        />
                        <Tooltip id="Edit" />
                      </>
                    )}
                  </div>
                </div>
              </section>
            ))
          )}
          {tasks.length > 0 && (
            <button onClick={handleClearAll} className="mx-auto w-fit">
              Clear All
            </button>
          )}
        </section>
      </div>
      <ToastContainer
        autoClose={1000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="text-white"
      />
    </>
  );
}

export default MongezAtomTodo;
