const Events = () => {
        const handleMyEvent = (e) =>{
            console.log(e);
            console.log('Ativou o evento!');
        };

        const renderSomething = (x) =>{
            if(x){
               return <h1>Renderizando isso!</h1>; 
            }else{
                return <h1>Também posso renderizar isso!</h1>
            }
        }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui tam´bem</button> 
            </div>
            {renderSomething(true)/*aqui eu cocloquei os parenteses, pois quero que ela seja executada na própria renderização da pagina.*/} 
            {renderSomething(false)}
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