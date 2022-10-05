import React from 'react'
import './App.css';

var carro = [
  {cor:"preto",marca:"volkswagen",modelo:"fusca"},
  {cor:"amarelo",marca:"volkswagen",modelo:"brasilia"},
  {cor:"prata",marca:"mitsubishi",modelo:"lancer"},
  {cor:"preto",marca:"honda",modelo:"HR-V"},
  {cor:"amarelo",marca:"ford",modelo:"mustang"},
  {cor:"prata",marca:"honda",modelo:"city"},
  {cor:"vermelho",marca:"ford",modelo:"fiesta"}
]

//FAZER ISSO LER TODOS OS VETORES
function leVetorQ1(carro){
  for(let i in carro){
    return(
      <div>
        Modelo: {carro[i].modelo}, Marca: {carro[i].marca}, Cor: {carro[i].cor}; <br/> 
      </div>
    )
}
}

const estilo = {
      body:{
        backgroundColor:"rgb(46, 88, 112)",
        with:"100%",
        height:"1920px",
      },

      titulo:{
        color:"whiteSmoke",
        textAlign:'center',
        FontFamily:"Arial"
      },

}

function App() {
  return (
    <body className="App" style={estilo.body}>
      <div>
        <h2 class="titulo" style={estilo.titulo}>PROVA 1 DE PROGRAMÇÃO ORIENTADA A EVENTOS</h2>
        <p>Por: Hiury e Gabriel Weber</p>
      </div>
      <div class="q1">
        <h1>Questão 1:</h1>
        <p>
          vetor escolhido: <br/>
          {leVetorQ1(carro)}
        </p>
      </div>
    </body>
  );
}

export default App;
