const UserDetails = ({nome, idade, profissao}) => {
    
  return (
    <div>
       <h2>{nome}</h2>
       <p>{idade}</p>
       <p>{profissao}</p>
       {idade >= 18 ? "Pode dirigir":"não pode dirigir"}
    </div>
  )
}

export default UserDetails;