import {useState,useEffect} from 'react'

/*
// converta a funcao abaixo em componente
function InputSet({id, labelText,onInputChange}) {
  return (
   <div>
      <label htmlFor={id}>{labelText}</label>
          <input id={id} type="number" onChange={onInputChange} />
   </div>
  )
}

function Result({imc, classif}) {
  return (
     <>
     <div className="result">IMC: {imc}</div>
     <div className="result">{classif}</div>
     </>
   
  )      
}

const Form = () =>{
  // Variáveis de estado foram trazidas ("elevadas") dos filhos para o pai

     const [state,setState] = useState({
       peso:'',
       altura:'',
       classif:'',
       imc:''
     })

      //Acessando as variaveis individualmente, via desestruturação
      const {peso,altura,classif,imc} = state
      
     function handleInputChange(event){

      if (event.target.id ==='peso') setState({...state, peso:event.target.value})
      else if(event.target.id === 'altura') setState({...state, altura: event.target.value})
     }
    
     
     useEffect(() => {
      let imcTemp, classifTemp

      if(isNaN(peso) || isNaN(altura)) imcTemp = '---'
      else imcTemp = peso / altura ** 2
      
      if(imcTemp < 18.5) 
        classifTemp = 'Abaixo do peso'
      else if(imcTemp > 18.5 && imcTemp < 25)
        classifTemp = 'Peso Normal'
      else if(imcTemp >= 25 && imcTemp < 30)
        classifTemp = 'Sobrepeso'
      else if(imcTemp >= 30 && imcTemp < 35)
        classifTemp = 'Obesidade Grau I'
      else if(imcTemp >= 35 && imcTemp < 40)
        classifTemp = 'Obesidade Grau II'
      else if(imcTemp >= 40)
        classifTemp = 'Obesidade Grau III ou Mórbida'
      else
        classifTemp = ''

        setState({...state,imc:imcTemp, classif:classifTemp})
     },[ peso,altura])
  return (
    <>
          <h1>Cálculo do IMC</h1>
          <form>
          /*
          //  { /* Substitua as chamadas de função abaixo pelos componentes correspondentes */ //}
          //  { /*inputSet('peso', 'Peso (kg):', handleInputChange) */}
       //     <InputSet id="peso" labelText="Peso (kg):" onInputChange={handleInputChange} />
          //  { /* inputSet('altura', 'Altura (m):', handleInputChange) */}
        //    <InputSet id="altura" labelText="Altura (m):" onInputChange={handleInputChange} />
          //  { /* result(imc, estadoClassif) */}
           // <Result imc={imc} classif={classif} />
       //   </form>
     //   </>
   
  //  )
  //}

// criacao da entrada input set, passando as props
 function InputSet({id,labelText,onInputChange}) {
   return(
     <div>
       <label htmlFor={id}>{labelText}</label>
       <input id={id} type='number' onChange={onInputChange}/>
     </div>
   )
 }
 /*
  function PrimeiroComponente({onInputChange}) {
    return (
      <div className="input-set">
        <label htmlFor="area">Área (km²)</label>
        <input id="area" type="number" onChange={onInputChange} />
      </div>   
    )
  }
  /* PRIMEIRO COMPONENTE 
    <div class="input-set">
      <label for="area">Área (km²)</label>
      <input id="area" type="number" />
    </div>
  */
  /*
  function SegundoComponente({onInputChange}) {
    return (
      <div className="input-set">
        <label htmlFor="pop">População</label>
        <input id="pop" type="number" onChange={onInputChange} />
      </div>     
    )
  }
   /* SEGUNDO COMPONENTE 
    <div class="input-set">
      <label for="pop">População</label>
      <input id="pop" type="number" />
    </div>
  */
 /*
  function TerceiroComponente({densidadePop, categoria}) {
    return (
      <div className="result">
        <div>Densidade populacional: {densidadePop} hab/km²</div>
        <div>Categoria: <b>{categoria}</b></div>
      </div>        
    )
  } */
  function Result({densidadePop, categoria}) {
    return (
      <div className="result">
        <div>Densidade populacional: {densidadePop} hab/km²</div>
        <div>Categoria: <b>{categoria}</b></div>
      </div>        
    )
  }
  /* TERCEIRO COMPONENTE 
    <div class="result">
      <div>Densidade populacional:</div>
      <div>Categoria:</div>
    </div>
  */

  function Page() {

    /**********************************************************************************
      2. Crie aqui as variáveis de estado que julgar necessárias
    **********************************************************************************/
   /* const [area, setArea] = useState()
    const [populacao, setPopulacao] = useState()
    const [densidadePop, setDensidadePop] = useState()
    const [categoria, setCategoria] = useState() */

    //Criando as seguintes variaveis de estado
    const [state,setState] = useState ({
      area:undefined,
      populacao: undefined,
      densidadePop: undefined,
      categoria: undefined
    })

      //Acessando as variaveis individualmente via desestruturacao
      const {area,populacao,densidadePop,categoria} = state

    /**********************************************************************************
      3. Escreva aqui o código necessário para o useEffect()
      Nesse código, deverá ser feito o seguinte:
      - O cálculo da densidade populacional, igual a população dividida por área
      - A definição da categoria, conforme as regras:
        - Quando densidade < 100 -> Baixa densidade
        - Densidade > 100 e < 1000 -> Média densidade
        - Densidade > 1000 -> Alta densidade
      - Atualize as variáveis de estado apropriadas, para usar seu valor no terceiro
        componente
      - NÃO SE ESQUEÇA DAS DEPENDÊNCIAS!!!!
    **********************************************************************************/
      
    //criando a funcao para manipular variaveis 

    function handleInputChange(event){

      if(event.target.id === 'area') setState({...state, area: event.target.value})
      else if (event.target.id === 'populacao') setState({...state, populacao: event.target.value})
    }

    useEffect(() => {
      let dens, cat

      if(isNaN(area) || isNaN(populacao)) dens = 'N/D'
      else dens = populacao / area

      if(dens === 'N/D') cat = ''
      else if(dens < 100) cat = 'Baixa densidade'
      else if(dens >= 100 && dens <= 1000) cat = 'Média densidade'
      else cat = 'Alta densidade'

      //setDensidadePop(dens)
      //setCategoria(cat)

      //atualizando as variaveis de saida 
      setState({...state, densidadePop:dens, categoria:cat})
    }, [area, populacao])

    return (
      <form>
        <h1>Densidade populacional</h1>

        {/*imagem na pasta publico */}
        <div id="world-map">
          <img src="world-map.png" alt="Mapa múndi" />
        </div>

        {/* Coloque aqui o primeiro componente */} 
        {/*<PrimeiroComponente onInputChange={ event => setArea(event.target.value)} /> */}
        
        <InputSet id="area" labelText="Área (km²): " onInputChange={handleInputChange} />
        
        {/* Coloque aqui o segundo componente */<br></br>}
        {/*<SegundoComponente onInputChange={ event => setPopulacao(event.target.value) } /> */}
        <InputSet id="populacao" labelText="População: " onInputChange ={handleInputChange} />
        {/* Coloque aqui o terceiro componente */}
        {/* <TerceiroComponente densidadePop={densidadePop} categoria={categoria} /> */}
        <Result densidadePop={densidadePop} categoria ={categoria} />
      


      </form>
    )
  }
  
export default Page