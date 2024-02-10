/* eslint-disable react/prop-types */
import { ImCross } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  colorSelected,
  deleted,
  edited,
  toggled,
} from "../redux/todos/actions";
import { useState } from "react";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const { text, completed, color, id } = todo;
  const [editingText, setEditingText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);

  const handleStatusToggle = (todoId) => {
    dispatch(toggled(todoId));
  };

  const handleColorChange = (todoId, color) => {
    dispatch(colorSelected(todoId, color));
  };

  const handleEdit = () => {
    setIsEditing(true); // Set editing mode to true when edit button is clicked
  };

  const handleSaveEdit = () => {
    dispatch(edited(id, editingText));
    setIsEditing(false); // Set editing mode to false after saving
  };

  const handlerDelete = () => {
    dispatch(deleted(id));
  };

  return (
    <div className='flex justify-start items-center p-2 hover:bg-purple-50 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0'>
      {/* compelete or incompelete input */}
      <div
        className={`rounded-full  bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type='checkbox'
          checked={completed}
          onChange={() => handleStatusToggle(id)}
          className='opacity-0  cursor-pointer absolute rounded-full'
        />
        {completed && (
          <MdDone className=' text-lg text-green-500 pointer-events-none' />
        )}
      </div>

      {/* Render input field if editing mode is activated, otherwise render text */}
      {isEditing ? (
        <input
          type='text'
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          className='flex-1 px-2 py-1 border-none outline-none bg-transparent underline '
        />
      ) : (
        <div
          className={`select-none flex-1 ${completed ? "line-through" : ""}`}
        >
          {text}
        </div>
      )}

      {/* color priority */}
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === "yellow" && " bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          color === "red" && "  bg-red-500"
        } `}
        onClick={() => handleColorChange(id, "red")}
      ></div>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color === "green" && "  bg-green-500"
        } `}
        onClick={() => handleColorChange(id, "green")}
      ></div>

      {/* Render edit button if not in editing mode, otherwise render save button */}
      {isEditing ? (
        <div onClick={handleSaveEdit} className='text-2xl  cursor-pointer'>
          <MdDone />
        </div>
      ) : (
        <div onClick={handleEdit} className='text-2xl  cursor-pointer'>
          <CiEdit />
        </div>
      )}

      {/* Delete button */}
      <div
        onClick={handlerDelete}
        className='text-red-500 text-lg  cursor-pointer'
      >
        <ImCross />
      </div>
    </div>
  );
};

export default Todo;
