import Footer from "./Footer";
import Header from "./Header";
import TodoList from "./TodoList";

const TodoBoard = () => {
  return (
    <div className='grid place-items-center bg-gray-100 h-screen px-6 font-sans'>
      <div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-sky-100'>
        {/* header  */}
        <Header />

        <hr className='mt-4' />

        {/* todo list  */}
        <TodoList />

        <hr className='mt-4' />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default TodoBoard;
