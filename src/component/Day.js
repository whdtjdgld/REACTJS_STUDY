import { useParams } from "react-router";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day(){
    // dummy.words
    const {day} = useParams();
    // const wordList = dummy.words.filter(word => word.day === Number(day));
    // const [words, setWords] = useState([]);
    // useEffect(()=>{
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setWords(data);
    //     });
    // }, []);
    
    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return(
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {/* for word in words 랑 같은
                dummy.words.map(word => )  */}
                {words.map(word => (
                <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        </>
    );
}