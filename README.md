REACT JS

개발환경 : vscode

Day1 Commit

왜 node js? create-react-app 라이브러리때문에

글면 npx npm 툴 이용가능

node.js 최신버전 설치후 vscode에서 터미널에 npx create-react-app 이름

npx npm : node.js 명령어

미리보기 : npm start

src /app.js 메인페이지에 들어갈 HTML

public/index.html 메인페이지

app.js 에서 코딩한걸 index.js를 통해 index.html 박아넣게함 (<div id='root'>)
  
박아넣게 하는건 index.js에서 document.getElementById('root')
  
node_modules : 라이브러리 모은 폴더
  
public : static 파일 보관함
  
src : 소스코드 보관함
  
package.json : 설치한 라이브러리 목록 (건들일 없음)

*기본 시작 상태 - 평소에 웹만들던거처럼 하면된다 &*********** ㄹㅇ임
  
function App() {
  
이자리엔 변수명이라던지 선언가능
  
  return (   <<<--- 여기부터 html 시작
                   
    <div className="App">
  
      ~~~~~~~~~~
  
    </div>
    
  );
  
}

하지만 다른점 위에는 HTML이 아니라 HTML처럼 생긴 JSX이다

태그에 class 주고싶다 - div classname=""

app.css 에서 css 개발

여기서! 리액트가 쌩 html보다 편리한 이유

****** 데이터 바인딩 : 백엔드에서 가져온 데이터를 프론트에 뿌리는것 이 쉽다

<h4> { 변수명 }</h4> 장고랑 비슷하네?

function 함수() {} 해놓고 { 함수() } 이거도 가능함

img 쓸때는 이미지를 import logo from './~~.jpg' 하고 src={~~} 

style = {color:'blue', fontSize:'30px'} 오브젝트 형식으로

######################################################

state

데이터는 1. 변수에 넣거나, 2. state에 넣거나

import React, { useState } from 'react'; 임포트로 시작

useState('남자코트추천'); [a,b]

a : 남자코트추천 b: 남자코트추천 state 정정해주는 함수

1. 변수대신 쓸수있는 데이터 저장공간
2. useState() 를 이용해 만들어야함 
3. 문자 숫자 array object 다 저장가능
 
ex) let/const/var [글제목, 글제목변경] = useState(['남자코트추천', '백종성']);

해놓고 바인딩할때 { 글제목[0] } { 글제목[1] } 하면 따로쓸수도있다

하는 이유 웹이 app처럼 동작하게 하려고

state에 저장해놓으면 변경이 되어도 html이 새로고침없이 자동 재렌더링됨 SPA라고도하지

수시로 수정되는 데이터들 넣자

onClick = { 클릭될대 실행할 미리 지정한 함수 }

onClick = { () => { 실행할내용 }} # 함수를 여서 짜는겨

state는 그냥 변경이 안된다 let [a,b] = useState(0);

에서 b를 바꿔야한다 b는 state를 아예 갈아치우는 함수다

ex) b(a+1)

-- state 데이터 수정 테크닉★★★★

state를 직접 건들수가 없다 so

1. 기존 state 카피본 생성
2. 카피본에 수정사항 반영
3. 변경함수()에 집어넣기

deepcopy (완전복사 참조 말고)하는 경우

var newArray = [...글제목];

###########################################################

Day2 Commit

html을 깔끔하게! 컴포넌트 사용 (반복 출현하는애들 자주 변경되는애들 추천 django에서 {% for%}비슷 )

처음 시작하는 function을 벗어나서 컴포넌트는 항상 대문자로 시작하셈!!

컴포넌트에 변수 함수를 선언하고싶으면 해당 function 안에서 선언하도록

또한 컴포넌트 안에 있는 useState는 여러 컴포넌트가 사용되더라도

따로따로 관리된다

ex)<Modal /> <Modal /> <Modal /> 있더라도 CHANGE를 누를경우 해당 컴포넌트만 변경	 

function Modal(){ 

const [name, setName] = useState("백종성");

  function changeName(){
  
    setName(name === "백종성" ? "나 강림" : "백종성");
    
    // name이 백종성이면 나강림으로 바꾸고 나강림이면 백종성으로
    
  }
  
 return(
 
    <>
    
    <div className="modal">
    
      <h2 id="name">{name}</h2>
      
      <button onClick={changeName}>Change</button>
      
      <p>날짜</p>
      
      <p>상세내용</p>
      
    </div>
    
    </>
    
  )
  
}

}

작성 그러면 <Modal></Modal> or <Modal /> 하면 안의 html이 그대로 나온다

원래는 맨 위아래에다가도 <div></div> 해서 막아줘야하는데

그게 귀찮으면 맨위에 <> 맨 아래에 </>

const 선언

const naver = {

    name : "네이버",
    
    url : "https://www.naver.com",
    
  };
  
사용

<a href={naver.url}>{naver.name}</a>

컴포넌트는 다른 폴더에서 .js 파일 만들어서 모아둔 다음 app.js에서 import 하면 된다

index.css

body div p 등 전체 태그 프로젝트에 영향을 미치는  css

app.css

컴포넌트형식으로 태그하나에만 영향을 미치는 css근데 걍 app.css에다가 다해도될듯

############################################################

Props (properties의 약자)속성값 = 파라미터랑 같은 역할이네 보니까

같은 역할인데 쓸때 좀 다르네?

<Hello date={"화"}></Hello>

<Hello date={"수"}/> ## props 설정

쓸때 Hello.js에서

export default function Hello(day){

    return(
    
    <div>
    
        <h1 style={{color:"blue", borderRight:'12px solid #000'
        
    , marginBottom:'30px', opacity:0.5}}>
    
        Hello</h1>
        
        <World />
        
        <World />
        
        <p>{day.date}</p> ## 이부분이 중요 ★★★ Hello(day) app.js에서 설정한 date
        
    </div>
    
    )
    
}

혹은 

export default function Hello({date}){ ## {date}로 받아서 사용해도 된다

    return(
    
    <div>
    
        <h1 style={{color:"blue", borderRight:'12px solid #000'
        
    , marginBottom:'30px', opacity:0.5}}>
    
        Hello</h1>
        
        <World />
        
        <World />
        
        <p>{date}</p>
        
    </div>
    
    )
    
}





###########################

<참고> jsp ES6ver 문법

var [a,b] = [10, 100];

a b array 안에 10, 100 넣겠따

/* eslint-disable */ 터미널창에 warning뜨는거 없애기

하지만 let, const를 사용하면 var를 사용할때보다 상당히 이점이 많다.

두개의 공통점은 var와 다르게 변수 재선언 불가능이다.

let과 const의 차이점은 변수의 immutable여부이다.

let은 변수에 재할당이 가능하지만,

const는 변수 재선언, 재할당 모두 불가능하다.

###################################################################

Day3 Commit 예정 (웹페이지 만들어보기)
