import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
import './App.css';
import Test from './components/test';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);


  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph((prevParagraph) => !prevParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
      setAllowToggle(true);
  };


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>toggle paragraph</Button>
    </div>
  );
}

export default App;

// 리액트가 demooutput이 바뀔 때만 재실행

// useCallback이 저장된 함수를 반환
// toggleparagraphhandler에 2번째 인자가 [] 일 경우, (디펜던시 배열)
// 디펜던시 배열에 변경값을 넣을 경우 항상 최신의 값을 사용하게 됨.
