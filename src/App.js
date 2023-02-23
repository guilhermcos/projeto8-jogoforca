import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

export default function App() {
  const forcas = ["assets/forca0.png", "assets/forca1.png", "assets/forca2.png", "assets/forca3.png", "assets/forca4.png", "assets/forca5.png", "assets/forca6.png",]
  
  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [erros, setErros] = useState(0)
  


  function inicioJogo() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraJogo = palavras[indiceAleatorio].split("");
    setPalavraEscolhida(palavraJogo.join(" "));
    setErros(0);
    
  }


  return (
    <div className="App">
    <Jogo forca={forcas[erros]} inicioJogo={inicioJogo} palavraEscolhida={palavraEscolhida}></Jogo>
    <Letras></Letras>
  </div>
  );
  }
