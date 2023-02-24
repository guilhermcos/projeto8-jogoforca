import { useState } from "react";



export default function Jogo(props) {

  if (props.seGanhou === "sim" || props.seGanhou === "não") {
    const corPalavra = (props.seGanhou === "sim") ? "#27AE60" : "#FF0000"
    return (
      <div className="jogo">
        <img data-test="game-image" className="forca" src={props.forca} alt="" />
        <button data-test="choose-word" onClick={props.inicioJogo} className="escolher-palavra">
          <p>Escolher Palavra</p>
        </button>
        <h2 data-test="word" style={{ color: corPalavra }}>{props.palavraMostrada}</h2>
      </div>
    )
  } else {
    return (
      <div className="jogo">
        <img data-test="game-image" className="forca" src={props.forca} alt="" />
        <button data-test="choose-word" onClick={props.inicioJogo} className="escolher-palavra">
          <p>Escolher Palavra</p>
        </button>
        <h2 data-test="word">{props.palavraMostrada}</h2>
      </div>
    )
  }
}