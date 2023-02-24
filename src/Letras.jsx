export default function Letras(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const alfabetoElement = alfabeto.map(letras)



    function letras(word) {
        if (props.seGanhou === "sim" || props.seGanhou === "não") {
            return <button key={word} onClick={() => props.compara(word)} className="letra-desabilitada" disabled={true}><p>{word.toUpperCase()}</p></button>
        }
        else if (props.palavraJogo.length !== 0) {
            const disabled = props.letrasClicadas.includes(word) ? true : false
            const classe = props.letrasClicadas.includes(word) ? "letra-desabilitada" : "letra-habilitada"
            return <button key={word} onClick={() => props.compara(word)} className={classe} disabled={disabled} ><p>{word.toUpperCase()}</p></button>
        } else {
            return <button key={word} onClick={() => props.compara(word)} className="letra-desabilitada" disabled={true} ><p>{word.toUpperCase()}</p></button>
        }
    }

    return (
        <div className="letras">
            {alfabetoElement}
        </div>
    );
}