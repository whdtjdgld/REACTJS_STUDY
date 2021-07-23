/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['옷잘입는남자', '백종성', '취업하자']);
  // a,b 를 만든다
  let [like, count] = useState(0);
  function changetitle(){
    var newArray = [...글제목]; // deepcopy
    newArray[0] = '여자코트추천';
    newArray.sort();
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
        {/* className에도 {} 가능;;
        but style을 쓰고자할때는 {object} 형식으로 작성
        */}
      </div>
      <button onClick={changetitle}>버튼</button>
      <div className="list">
        <h3>{글제목[0]} <span onClick={()=>{count(like+1)}}>😊</span>{like}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 >{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
        {/* html을 한 단어로 줄여서 쓰는법
        리액트의 Component */}
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      
      <Modal></Modal>
    </div>
  );
}
// 컴포넌트 리액트 쓰는이유!!
function Modal(){
  return(
    <>
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;
