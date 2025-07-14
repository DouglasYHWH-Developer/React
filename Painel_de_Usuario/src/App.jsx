import './App.css'
import Layout from './components/Layout'
import ListaDeCompras from './components/ListaDeCompras'
import Painel from './components/Painel'
import PainelVisibilidade from './components/PainelVisibilidade'

function App() {

  return (
    <>
     { /*<Painel />*/}
     {/*<PainelVisibilidade />*/}
     {/*<ListaDeCompras />*/}
     {/* props children */}
     <Layout>
      <h3>Bem-vindo à minha aplicação</h3>
      <p>Este conteúdo está sendo passado como children para o Layout.</p>
     </Layout>
    </>
  )
}

export default App
