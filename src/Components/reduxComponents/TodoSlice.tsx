import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskProps = {
  text:string,
  checked: boolean
}
export type TodoStateProps = {
  tasks:TaskProps[],
  editIndex: number|null
}
const initialState: TodoStateProps ={
  tasks:[],
  editIndex: null
}
 const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTask:(state,action: PayloadAction<string>)=>{
      state.tasks.push({text:action.payload, checked:false})
    },
    deleteTask:(state,action: PayloadAction<number>) =>{
      state.tasks.splice(action.payload, 1)
    },
    clearTasks:(state)=>{
      state.tasks = []
    },
    toggleCheck:(state, action: PayloadAction<number>) =>{
      const task = state.tasks[action.payload];
      if (task) {
        task.checked = !task.checked
      }
    },
    startEditTask:(state,action : PayloadAction<number>) =>{
      state.editIndex = action.payload
    },
    confirmEditTask:(state,action: PayloadAction<{index:number,text:string}>) =>{
      const { index, text} = action.payload;
      if (state.tasks[index]) {
        state.tasks[index].text = text;
      }
      state.editIndex = null
    },
  }
})
export const { addTask, deleteTask, clearTasks, toggleCheck, startEditTask, confirmEditTask} = todoSlice.actions
export default todoSlice.reducer;