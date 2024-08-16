import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { setIsDone } from "../features/todo";



const Todo = ({  todo }) => {

  const dispatch = useDispatch()

  function handleComplete() {
    dispatch(setIsDone(todo.id))
  }

  return (
    <div>
      <div className=" w-full flex justify-between px-4 py-3 items-center">
        <div className="flex gap-2">
          <input type="checkbox" className="h-10 px-2"  onChange={handleComplete}/>
          <div className=" flex ">
            <p
              className={`flex gap-2  max-w-48 text-wrap ${
                todo.isDone ? "line-through" : ""
              } items-center text-white  text-xl`}
            >
              {todo.value}
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <RiEdit2Fill className="text-slate-100 text-3xl "/>

          <FaTrash className="text-slate-100 text-3xl " />
        </div>
      </div>
      <hr className="w-full border-red-100 " />
    </div>
  );
};

export default Todo;
