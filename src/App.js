import React, { version } from 'react'
import './App.css';

//#######################################################
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
//#####################################################


//-x-x-x-x-x-x-x-QUESTÃO 1-x-x-x-x-x--x-x-x-x-x-x-x-x-
  var carro = [
    {cor:"preto",marca:"volkswagen",modelo:"fusca"},
    {cor:"amarelo",marca:"volkswagen",modelo:"brasilia"},
    {cor:"prata",marca:"mitsubishi",modelo:"lancer"},
    {cor:"preto",marca:"honda",modelo:"HR-V"},
    {cor:"amarelo",marca:"ford",modelo:"mustang"},
    {cor:"prata",marca:"honda",modelo:"city"},
    {cor:"vermelho",marca:"ford",modelo:"fiesta"}
]

  //lê e devolve o vetor pro html (não sei como funciona exatamente kkkkk)
  function leVetorQ1(carro){
    return (
      carro.map((elem) => <div>Modelo: {elem.modelo};  Marca: {elem.marca};  Cor: {elem.cor};</div>)
    )
  }

  //filtra o vetor com base nos parametros da funcao filtramarca e imprime o vetor no html (tambem não sei como funciona exatamente)
  
  //---->>>> seria legal poder passar qual marca você quer filtrar quando chamar a funcão, 
  //              aí ele comprar carro.marca com a marca que tu passou
  //                        (deixar para o final, eu acho)
  function filterVetorQ1(carro){
    function filtramarca(carro){
      return(carro.marca === "volkswagen")
    }  
    let carrofiltrado = carro.filter(filtramarca) //aparentemente, não funciona se tu passar parametros para a função dentro do filter
    return(
      carrofiltrado.map((elem) => <div>Modelo: {elem.modelo}; 
      Marca {elem.marca}; Cor: {elem.cor}</div>)
    )
  }

function App() {
  return (
    <body className="App" style={estilo.body}>
      <div>
        <h2 class="titulo" style={estilo.titulo}>PROVA 1 DE PROGRAMÇÃO ORIENTADA A EVENTOS</h2>
        <p>Por: Hiury e Gabriel Weber</p>
      </div>
      <div class="q1"> 
      < br/><br/>
        <h1>Questão 1:</h1>
        <p>
          vetor escolhido: <br/><br/>
          {leVetorQ1(carro)}
        </p>
        <p>
          <br/>
          <br/>
          Vetor filtrado: <br/>
          Apenas carros da volkswagen: <br/>
          {filterVetorQ1(carro)}
          </p>
      </div>
    </body>
  );
}

export default App;
