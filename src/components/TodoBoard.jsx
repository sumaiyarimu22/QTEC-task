import Footer from "./Footer";
import Header from "./Header";
import TodoList from "./TodoList";

const TodoBoard = () => {
  return (
    <div
      className='grid place-items-center h-screen px-6 font-sans'
      style={{
        background:
          "linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(135, 206, 235, 0.5))",
      }}
    >
      <div className='w-full max-w-3xl shadow-md rounded-lg p-6 bg-white'>
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
