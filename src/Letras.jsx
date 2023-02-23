export default function Letras() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const alfabetoElement = alfabeto.map(letras)

    function letras(word){
        return <button key={word} className="letra"><p>{word.toUpperCase()}</p></button>
    }

    return (
        <div className="letras">
            {alfabetoElement}
        </div>
    );
}