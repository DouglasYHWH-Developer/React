const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique para executar a função</button>
    </div>
  )
}

export default ExecuteFunction;

{/* 
    const ExecuteFunction = (props) => {
  return (
    <div>
        <button onClick={props.myFunction}>Clique para executar a função</button>
    </div>
  )
}

export default ExecuteFunction;
    */}