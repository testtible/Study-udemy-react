import { useEffect, useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../hooks/use-http';

const NewTask = (props) => {
  
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      console.log(taskText, taskData);
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({ // 이 요청은 컴포넌트가 재평가될 때마다 전송되지는 않음.
      url : 'https://udemy-http-7af8a-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type' : 'application/json'
      }
    }, createTask.bind(null, taskText));
  };
  // bind = 사전 구성 목적으로 사용 가능 / 바로실행 x
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
