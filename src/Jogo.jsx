import { useState } from "react";



export default function Jogo(props) {


  return (
    <div className="jogo">
      <img className="forca" src={props.forca} alt="" />
      <button onClick={props.inicioJogo} className="escolher-palavra">
        <p>Escolher Palavra</p>
      </button>
      <h2>{props.palavraMostrada}</h2>
    </div>
  )
}