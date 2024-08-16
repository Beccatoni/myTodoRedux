import { useId, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Todo from './components/Todo'
import { addTodo,} from './features/todo'
import { setInput } from './features/inputs'



function App() {
  const [inputText, setInputText] = useState(
    {
      value: '',
      isDone: false,
      id: useId()
    }
  )
const todos = useSelector((state)=> state.todos.todos )

const dispatch = useDispatch()

function handleChange(event){
  setInputText(current => ({
    ...current,
    value: event.target.value
  }))
}

function handleSubmit(event){
  event.preventDefault();
  dispatch(setInput(inputText))
  dispatch(addTodo(inputText))
  console.log(todos)
  setInputText({
    value: '',
    isDone: false,
    id: ''
  })
}

  

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen p-10">
        <h1 className="text-[10rem] font-bold text-slate-200">todos</h1>

        <div className="w-[60%] h-[80%] bg-lime-700 p-8 rounded flex flex-col gap-6">
          <div className="flex w-full bg-white items-center justify-center py-2 rounded-xl px-2 ">
            <input
              type="text"
              placeholder="Add todo..."
              className="w-[90%] outline-none"
              value={inputText.value}
              onChange={handleChange}
              onKeyDown={(event)=> {
                   event.key === 'Enter'? handleSubmit(event) : null
              }}
            />
            <button
              className="bg-[#01938D] shadow-2xl h-6 w-6 rounded-full flex text-center items-center justify-center text-2xl font-bold text-white"
              onClick={(event)=> handleSubmit(event)}
            >
              <p className="pb-[0.4rem]">+</p>
            </button>
          </div>
          <ul className="flex flex-col gap-3">
          {todos.map((todo) => (
            
            <li key={todo.id} className="">
                <Todo todo={todo}/>
            </li>
          ))}
        </ul>
        </div>

        
      </div>
    </>
    
  )
}

export default App
