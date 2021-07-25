import dummy from "../db/data.json";
import { useParams } from "react-router";

export default function Day(){
    // dummy.words
    const {day} = useParams();
    const wordList = dummy.words.filter(word => word.day === Number(day));

    return(
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {/* for word in words 랑 같은
                dummy.words.map(word => )  */}
                {wordList.map(word => (
                <tr key={word.id}>
                    <td>
                        {word.eng}
                    </td>
                    <td>
                        {word.kor}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}