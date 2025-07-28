const Container = ({children, myValues}) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        <p>O valor é: {myValues}</p>
    </div>
  )
}

export default Container;