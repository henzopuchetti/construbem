import NavBarProjeto from '../components/NavBarProjeto';
import Footer from '../components/Footer';
import Dados from '../components/Dados';
//import './cabeca.css'


function Contato(){
  return (
    <div>
      <div className="cabecalho bg-dark">
        <h4 className='lala'>Natural+</h4>
        <p className='lolo'>A loja que utiliza apenas o natural</p>
      <NavBarProjeto></NavBarProjeto>
      </div>
      <Dados></Dados>
      <Footer></Footer>
    </div>
  )
} export default Contato