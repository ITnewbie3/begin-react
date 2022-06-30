import './App.css';
import React from 'react';
// import MyComponentClass from './MyComponentClass';

import EventPractice from './EventPractice';
import MyComponent from './MyComponent';
import Counter2 from './constents/Counter2';
import { MyContext } from './component/MyContext';

function App() {
  const newtext = "안녕하세요";

  return (
    // * JSX에서 자바스크립트 표현식을 사용하려면 {} 로 감싼다.
    // * if문 대신 조건부연산자 - 삼항연산자를 사용.
    <MyContext.Provider value={newtext}>
<div className="react">
      {/* <CounterF></CounterF> */}
    <MyComponent name='이름' age={20}><h2>해위</h2></MyComponent>
    <input type='text'></input>
    <Counter2/>
    </div>
    </MyContext.Provider>
  );
  // return React.createElement("div",null,"Hello",React.createElement("b",null,"react"))
    // 위의 원코드지만 자벨로 자동으로 변경해준다.
}

export default App;
