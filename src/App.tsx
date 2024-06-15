
import './App.css'
// import NormalTodo from './Components/NormalTodo'

import { Provider } from 'react-redux'
import { persistor, store } from './Components/reduxComponents/store'
import ReduxTodo from './Components/reduxComponents/ReduxTodo'
import { PersistGate } from 'redux-persist/integration/react'

// import MongezAtomTodo from './Components/mongezComponents/MongezAtomTodo'

function App() {
  // const count = countAtom.useValue();   // changes
  // const count = countAtom.value;   // value only
  //const [count, setCount] = countAtom.useState(); // if value and changes in same component
  // openAtom .... open, close  instead of boolean
  return (
    <main className='bg-main w-dvw min-h-[100vh] bg-cover flex justify-center tasks-center'>
        
        {/* <NormalTodo/> */}

        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ReduxTodo/>
        </PersistGate>
        </Provider>

        {/* <h1>Atom {count}</h1>
        <button onClick={()=> setCount(count +1)}>increase</button>
        <button onClick={()=> countAtom.reset()}>reset</button> */}

        {/* <MongezAtomTodo/> */}
    </main>
  )
}

export default App
