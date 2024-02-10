import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

const Header = () => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return; // Prevent adding empty todos
    dispatch(added(todoText));
    setTodoText("");
  };

  const handleAllCompelete = () => {
    dispatch(allCompleted());
  };
  const handleClearCompelete = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      {/* task add input form */}
      <form
        onSubmit={handleSubmit}
        className='flex items-center bg-purple-50 px-4 py-4 rounded-md'
      >
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-purple-50 '
        />
        <button type='submit' className='w-8 text-gray-700 h-8 text-3xl'>
          <MdAdd />
        </button>
      </form>

      {/* compelete all and cleare all task */}
      <ul className='flex justify-between my-4 text-xs '>
        <li
          onClick={handleAllCompelete}
          className='flex space-x-1 cursor-pointer'
        >
          <MdOutlineDoneAll className='text-xl w-4 h-4 text-green-500' />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearCompelete} className='cursor-pointer'>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
