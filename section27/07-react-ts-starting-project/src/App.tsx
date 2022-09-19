import React from 'react';
import Todos from './components/Todos';
import Todo from './components/models/todo';
import Test from './components/models/test';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn TS')];
  console.log(todos);
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
