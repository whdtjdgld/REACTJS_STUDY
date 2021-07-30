import { useRef } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch"

export default function CreateWord(){
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();

    function onSubmit(e){
        e.preventDefault(); // 버튼 눌러도 새로고침 안된다


            fetch(`http://localhost:3001/words/`,
            {
            method:"POST", // CRUD 체크
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({ // 필요한 데이터 형태 값
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone: false
                // id는 자동생성된다 pk니까 key = {word.id}
            }),
            })
            .then(res => { // 응답이 가고 만약 ok면
                if(res.ok){
                    alert("생성이 완료 되었습니다");
                    history.push(`/day/${dayRef.current.value}`)
                    // alert창 봤으면 입력한 day 페이지로 ㄱ
                }
            });
    }

    const engRef = useRef(null); // useRef dom에 접근 
    const korRef = useRef(null); // useRef dom에 접근 
    const dayRef = useRef(null); // useRef dom에 접근 
    
    return(
        <>
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
        </>
    )
}