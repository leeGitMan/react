/* eslint-disable*/
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  let posts = '강남 고기 dd맛집';
  
  let style = {color:'blue', fontSize : '30px'}

  let [title, changeTitle] = useState(['으아아아', 'state로 제목 만들기', 'bitcoin is good']);
  let [likeCount, changeCount] = useState(0);
  

  function func(){
    return 100
  }

  function btnChangeTitle(){
    // let newTitle = "새로운 제목"; 이렇게 하는 거 보단
    // object, array에선 state의 복사본을 만들어서 수정하자
    // let newTitle = title; 이건 복사가 아니라 참조형 데이터 타입이기에 값을 공유하는 꼴
    // react에서는 데이터는 불변의 데이터여야한다 (jpa랑 비슷하네)
    // immutalbe data
    let newTitle = [...title]; // deep copy
    newTitle[0] = '하하하';
    changeTitle(newTitle);
  }

  return ( // return 안에는 연속된 html태그가 존재할 수 없다
          // <div></div><div></div><div></div> 이렇게 
          // 그래서 큰 <div></div>안에 여러개 div를 만들었다.
    <div className="App">
      <div className="blakc-nav">
        <div style={style}>개발 Blog</div>
      </div>
      
      <button onClick={ btnChangeTitle }>글 제목 바꾸기</button> 
      <div className="list">
          <h3>{title[0]} <span onClick={ () => {changeCount(likeCount + 1)} }>👍</span> {likeCount} </h3>
          <p>2월 17일</p>
          <hr/>
      </div>

      <div className="list">
          <h3>{title[1]}</h3>
          <p>2월 17일</p>
          <hr/>
      </div>

      <div className="list">
          <h3>{title[2]}</h3>
          <p>2월 17일</p>
          <hr/>
      </div>

      <Modal/>
    
    </div>
  );
}

function Modal(){
 // component 문법 긴 html을 줄일 수 있다.
 // 이름은 소문자보다 대문자로 시작해서 만든다.
 // reuturn 안에 있는 건 태그하나로 묶어야 한다.
 // <></> 이렇게 쓰면 의미없는 <div></div> 큰 div를 안 써도 된다. Fragment 문법
 // Component 만드는 위치는 function App이랑 나란히 만든다.
 // Component를 만들면 그 안에 또 다른 Component도 만드는 게 가능해지고 관리가 편해진다.
 // Component 만드는 기준
 // Component는 반복 출현하는 HTML들로 만드는 것이 좋다.
 // 자주 변경되는 HTML UI들
 // 다른 페이지 만들 때도 Component로 만듦

 // 너무 많이 만들면 단점
 // state를 쓸 때 복잡해진다.
 // 실제로 app에 선언된 title state는 해당 app 함수에서만 존재한다.
 // 상위 Component에서 만든 state를 쓰려면 props문법을 이용해야한다.
  return(
    <div className="modal">
      <h2>글제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
