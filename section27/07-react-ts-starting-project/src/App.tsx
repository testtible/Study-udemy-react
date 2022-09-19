import Todos from './components/Todos';
import Todo from './components/models/todo';
import NewTodo from './components/NewTodo';
// import Test from './components/models/test';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn TS')];
  console.log(todos);
  return (
    <div>
      <NewTodo />
      <Todos items={todos}/>
    </div>
  );
}

export default App;
