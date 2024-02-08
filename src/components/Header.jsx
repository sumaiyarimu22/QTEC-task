import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineDoneAll } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <form className='flex items-center bg-gray-100 px-4 py-4 rounded-md'>
        <input
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
        />
        <button type='submit' className='w-8 text-gray-700 h-8 text-3xl'>
          <IoIosAddCircleOutline />
        </button>
      </form>

      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li className='flex space-x-1 cursor-pointer'>
          <MdOutlineDoneAll className='text-xl w-4 h-4 text-green-500' />
          <span>Complete All Tasks</span>
        </li>
        <li className='cursor-pointer'>Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;
