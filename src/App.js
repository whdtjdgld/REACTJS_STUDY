/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

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

  const naver = {
    name : "네이버",
    url : "https://www.naver.com",
  };

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
        <a href={naver.url}>{naver.name}</a>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      
      <Modal age={27}></Modal>
      <Modal age={30}/>
      <Modal age={10}/>
      <Hello date={"화"}></Hello>
      <Hello date={"수"}/>
      <Welcome />
    </div>
  );
}

// 컴포넌트 리액트 쓰는이유!!
function Modal({age}){
  const [name, setName] = useState("백종성");
  const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";
  // ? true , : false
  function changeName(){
    setName(name === "백종성" ? "나 강림" : "백종성");
    // name이 백종성이면 나강림으로 바꾸고 나강림이면 백종성으로
  }
  return(
    <>
    <div className="modal">
      <h2 id="name">{name}</h2>
      <button onClick={changeName}>Change</button>
      <button>{age}</button>
      <p>{msg}</p>
    </div>
    </>
  )
}

export default App;
