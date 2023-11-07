import NavBarProjeto from '../components/NavBarProjeto';
import Footer from '../components/Footer';
import Loja from '../components/Loja';
//import './cabeca.css'


function Sobre(){
  return (
    <div>
      <div className="cabecalho bg-dark">
        <h4 className='lala'>Construbem</h4>
        <p className='lolo'>A loja que constroi seus sonhos</p>
      <NavBarProjeto></NavBarProjeto>
      </div>
      <Loja></Loja>
      <Footer></Footer>
    </div>
  )
} export default Sobre