import { Provider } from "react-redux";
import store from "./redux/store";
import TodoBoard from "./components/TodoBoard";

const App = () => {
  return (
    <Provider store={store}>
      <TodoBoard />
    </Provider>
  );
};

export default App;
