import Header from "./components/Header";
import TodoList from "./components/TodoList";
import UserInput from "./components/UserInput";
import { ContextProvider } from "./context";

function App() {
  return (
    <ContextProvider>
      <Header />
      <UserInput />
      <TodoList />
    </ContextProvider>
  );
}

export default App;
