import NavBarProjeto from '../components/NavBarProjeto';
import Cardon from '../components/Card';
import Caroussel1 from '../components/Carousel';
import Footer from '../components/Footer';
import img3 from '../assets/hammer.svg'
//import './cabeca.css'


function Home(){
  return (
    <div>
      <div className="cabecalho bg-primary">
        <h4 className='lala'>Construbem</h4>
        <p className='lolo'>A loja que constroi seus sonhos</p>
      <NavBarProjeto></NavBarProjeto>
      </div>
      <Caroussel1></Caroussel1>
      <h2 className='popo'>Produtos</h2>
      <Cardon></Cardon>
      <Footer></Footer>
    </div>
  )
} export default Home