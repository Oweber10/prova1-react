import React, {useState} from 'react'
import './App.css';
import CarregaImg from './CarregaImg';

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
  function filterVetorQ1(carro,){
    
    function filtramarca(carro,){
      return(carro.marca === "volkswagen")
    }  
    
    let carrofiltrado = carro.filter(filtramarca) //aparentemente, não funciona se tu passar parametros para a função dentro do filter
    
    return(
      carrofiltrado.map((elem) => <div>Modelo: {elem.modelo}; 
      Marca {elem.marca}; Cor: {elem.cor}</div>)
    )
  }

function App() {

  //X-X-X-X-X-X-X-X-X-QUESTÃO 2-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X
  //cria peso e altura;

  //IMC MOSTRA NA TELA MAS PÁGINA RECARREGA, NÃO SEI USAR ASYNC NESSE CASO
  const [peso,setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [imc,setImc] = useState(0)

  function calculaIMC(){
    setImc((parseFloat(peso)/parseFloat(altura)*parseFloat(altura)))
  }


//-X-X-X-X-X-X-X-X-X-QUESTÃO 3-X-X-X-X-X-X-X-X-X-X
const [resultQ3,setResultQ3] = useState(0)
const [img,setImg] = useState(0)

    return (
    <body className="App" style={estilo.body}>
      <div>
        <h2 class="titulo" style={estilo.titulo}>PROVA 1 DE PROGRAMÇÃO ORIENTADA A EVENTOS</h2>
        <p>Por: Hiury e Gabriel Weber</p>
      </div>
      <div class="q1"> 
      < br/><br/>
        <h1>Questão 1: (tentar fazer possível escolher qual marca deseja filtrar)</h1>
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

      <div>
        <h1> <br/><br/><br/>
          QUESTÃO 2 (calcula o IMC, mas recarrega a página na mesma hora):
        </h1>
        <form onSubmit={calculaIMC}>
          <table>
              <tr>
                <td>
                  CALCULO DE IMC:
                </td>
              </tr>
              <tr>
                <td>
                  Insira seu peso:
                </td>
                <td>
                  <input type="text" name="peso"
                    onChange={(e)=>{
                      setPeso(e.target.value)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Insira sua altura:
                </td>
                <td>
                  <input type="text" name="altura"
                    onChange={(e)=>{
                      setAltura(e.target.value)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <input type="submit"/>
              </tr>
              <tr>
                <br/>
              </tr>
              <tr>
                Seu IMC é: {imc}
              </tr>
          </table>
          </form>
      </div>
      <div>
        <h1> <br/><br/><br/>
          QUESTÃO 3:
          </h1>
          <p>Essa é uma função anônima que apresenta o horário atual para o usuário.</p>
          {(function(){ //função anonima que mostra o horário atual
            var data = new Date().toLocaleTimeString();
            return(<div><br/><p>O horário atual é: {data}</p></div>);
          })(0) //inserindo uma variável na função para que ela seja executada no mesmo momento que carregada.
          }
        <p><br/><br/>Essa é uma arrow funcion que multiplica o valor abaixo por 2: <br/>
          <input type="text" 
            onChange={
              (e) => setResultQ3((parseInt(e.target.value)*2))//A arrow funcion é essa;
            }/>
          </p>
        <div><p>O resultado é {resultQ3}</p></div>
        <p>
          <br/><br/>
          Essa é uma classe que carrega uma imagem.
          <br/>
          Insira o link para a imagem que deseja carregar aqui: <br/>
          <input type="text" onChange={(e) => setImg(e.target.value)}/>
        </p>
        <CarregaImg img={img}/>
      </div>

    </body>
  );
}
export default App;
