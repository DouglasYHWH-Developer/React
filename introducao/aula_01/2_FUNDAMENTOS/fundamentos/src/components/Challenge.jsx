const Challenge = () =>{
    const n1 = 1;
    const n2 = 2;
    return(
        <div>
            <div>
                <p>n1: {n1}</p>
                <p>n2: {n2}</p>
                <button onClick={() =>console.log(n1 + n2) }>Soma evento</button>
            </div>
            
        </div>
    )
}

export default Challenge;

/*
    Crie um componente chamado Challenge;
    Importe-o em App.jsx;
    No componente criado faça a criação de dois valores numéricos;
    Imprima estes valores no console;
    Crie também um evento de click que soma estes dois numeros e exibe no console.
*/