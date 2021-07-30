import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    function addDay(){
        
        fetch(`http://localhost:3001/days/`,
        {
        method:"POST", // CRUD 체크
        headers: {
            "Content-Type": "application/json",
            },
        body: JSON.stringify({ // 필요한 데이터 형태 값
            day : days.length + 1 // days의 총 개수 +1
        }),
        })
        .then(res => { // 응답이 가고 만약 ok면
            if(res.ok){
                alert("생성이 완료 되었습니다");
                history.push(`/`)
                // alert창 봤으면 입력한 첫 페이지로 ㄱ
            }
        });
}
    
    return (
        <div>
          <h3>현재 일수 : {days.length}일</h3> 
          <button onClick={addDay}>Day 추가</button>
        </div>
    );
    }