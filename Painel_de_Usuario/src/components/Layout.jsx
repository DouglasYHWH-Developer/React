

const Layout = ({children}) => {
  return (
    <div>
        <header>
            <h2>Cabeçalho do Layout</h2>
        </header>
        <main>
            {children}
        </main>
        
        <footer>
            <p>Rodapé do layout</p>
        </footer>
    </div>
  )
}

export default Layout