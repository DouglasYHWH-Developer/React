const Events = () => {
        const handleMyEvent = (e) =>{
            console.log(e);
            console.log('Ativou o evento!');
        }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui tam´bem</button> 
            </div>
        </div>
    )
};
export default Events;
/*  Não colocamos os parênteses da funçao
 handleMyEvent'()' pois, se colocarmos ela será 
 executada junto à execução do código.
 Queremos que ela execute apenas quando o houver um 'click'.
 
 Outra coisa é que todo evento possui um parâmetro importante chamado 'event'
 
 Não faça isso!
  <button onClick={() => {
                    if(true){
                        console.log("Isso não deveria existir =)")
                    }
                }}
                >
                    Clica aqui por favor.</button>
 */