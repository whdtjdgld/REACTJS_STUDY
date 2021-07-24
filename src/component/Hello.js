import World from "./World";

export default function Hello({date}){
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
