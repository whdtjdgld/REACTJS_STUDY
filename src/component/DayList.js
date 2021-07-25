import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList(){
    console.log(dummy);
    return(
        <>
        <ul className="list_day">
            {dummy.days.map(day => (
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