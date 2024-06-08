import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { TasksProps } from '../features/types';

const useTodo = () => {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);
  
  const handleAdd = () => { 
    // setItem(inputRef.current.value)
    // setTasks([...tasks, inputRef.current.value]);
    if (inputRef.current && inputRef.current.value === '') {
      return toast.error('Task cannot be empty')
    }
    const newTask = inputRef.current ? inputRef.current.value : '';
    const add = [...tasks, { text: newTask, checked: false }];
    setTasks(add)
    toast.success(`Task ${tasks.length} Added Successfully `);
    localStorage.setItem('todo', JSON.stringify(add));
    // inputRef.current.value = ''
   }
  
   // Load todo
   useEffect(() => {
    const storedtasks = localStorage.getItem('todo');
    if (storedtasks) {
      setTasks(JSON.parse(storedtasks));
    }
  }, []);
   
   const handleDelete = (id:number)=>{
    const deleteItem = tasks.filter((_, index)=> index !==id)
    setTasks(deleteItem)
    toast.error(`Task ${id +1} Deleted`)
    localStorage.setItem('todo', JSON.stringify(deleteItem));
   }
  
   const handelClearAll = () => { 
    setTasks([])
    localStorage.removeItem('todo');
    toast.error('Tasks Cleared')
    }
   
    const handleCheck = (index:number) => {
      const newtasks = tasks.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      );
      setTasks(newtasks);
      toast.info('task status changed')
    };
  
    const handleEdit = (index:number) => {
      setEditIndex(index);
      toast.warn("Editing task");
    }
  
    const handleEditConfirm = (index:number) => {
      if (editInputRef.current) {
        const updatedTasks = tasks.map((item, i) =>
          i === index ? { ...item, text: editInputRef.current!.value } : item
        );
        setTasks(updatedTasks);
        setEditIndex(null);
        toast.success("Task Updated Successfully");
        localStorage.setItem('todo', JSON.stringify(updatedTasks));
      }
    }

  return {
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
  };
};

export default useTodo;
