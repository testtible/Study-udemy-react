import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';
function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => { // taskobj 쓰임새
      const loadedTasks = [];
  
        for (const taskKey in tasksObj) {
          loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
        }
        setTasks(loadedTasks);
    };

    fetchTasks({url: 'https://udemy-http-7af8a-default-rtdb.firebaseio.com/tasks.json'}, transformTasks); // best code가 아님, 디펜던시 배열에 추가하면 무한루프가 생김
    // use-http에 있던 상태가 동작되고, 그러하면 이 컴포넌트에서도 상태가 사용되기 때문.
    // 커스텀 훅에서 구성된 상태가 커스텀 훅을 사용하는 컴포넌트에 속하는 것
    // 자바스크립트 함수는 객체, 객체가 다시 만들어지면 내용은 같더라도 메모리에서는 새로운 객체
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
