import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

let palavraJogo = []


export default function App() {
  const forcas = ["assets/forca0.png", "assets/forca1.png", "assets/forca2.png", "assets/forca3.png", "assets/forca4.png", "assets/forca5.png", "assets/forca6.png",];

  const [letrasClicadas, setLetrasClicadas] = useState([]);
  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [erros, setErros] = useState(0);
  const [palavraMostrada, setPalavraMostrada] = useState("");

  function inicioJogo() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraJogo = palavras[indiceAleatorio].split("");
    setPalavraEscolhida(palavraJogo.join(" "));
    setErros(0);
    setLetrasClicadas([]);
    setPalavraMostrada(geraPalavraMostrada());
  }

  function geraPalavraMostrada() {
    let gerado = []
    for (let i = 0; i < palavraJogo.length; i++) {
      gerado.push("_")
    }
    gerado = gerado.join(" ");
    return gerado;
  }
  

  function atualizaPalavraMostrada(word) {
    let mostrada = palavraMostrada.split(" ");
    for (let i = 0; i < mostrada.length; i++) {
      if (palavraJogo[i] === word){
        mostrada[i] = word;
      }
    }
    mostrada = mostrada.join(" ");
    setPalavraMostrada(mostrada)
  }


  function compara(word) {
    if (palavraJogo.includes(word)) {
      let clicadas = [...letrasClicadas];
      clicadas.push(word);
      setLetrasClicadas(clicadas);
      atualizaPalavraMostrada(word);
    } else {
      if (erros < 6) {
        setErros(erros + 1)
      }
      let clicadas = [...letrasClicadas];
      clicadas.push(word);
      setLetrasClicadas(clicadas);
    }
  }

  return (
    <div className="App">
      <Jogo forca={forcas[erros]} inicioJogo={inicioJogo} palavraMostrada={palavraMostrada}></Jogo>
      <Letras letrasClicadas={letrasClicadas} palavraJogo={palavraJogo} compara={compara}></Letras>
    </div>
  );
}
