import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList(){
    const days = useFetch("http://localhost:3001/days");
    // const [days, setDays] = useState([]);
    // // 처음엔 빈 배열로 [] 만들고 api에서 리스트 가져와서 바꿈
    // useEffect(()=>{
    //     fetch("http://localhost:3001/days")
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data);
    //     });
    // }, []); // 빈배열 추가 : 랜더링 후 한번만 실행한다

    // 로딩화면 만들기 days가 불러와지지 않았다면 loading 표시
    if (days.length === 0){
        return <span>Loading...</span>
    }
    return(
        <>
        <ul className="list_day">
            {days.map(day => (
                // map이 for반복문이라고 보면된다잉
                //  = for day in days
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    {/* 작은따옴표가 아니라 ` 물결표 */}
                </li>
            ))}
        </ul>
        </>
    );
}