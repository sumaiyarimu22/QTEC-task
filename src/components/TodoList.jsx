import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const filterByPriority = (todo) => {
    const { priority } = filters;

    switch (priority) {
      case "medium":
        return !todo.completed;
      case "high":
        return todo.completed;
      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {/* todo  */}
      {todos.length === 0 ? (
        <p className='text-center'>No Task here</p>
      ) : (
        todos
          ?.filter(filterByPriority)
          .filter(filterByColors)
          .map((todo) => <Todo key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
