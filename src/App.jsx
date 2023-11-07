import Home from "./Pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./Pages/Contato";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App(){
 return(
 <div>
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/Sobre" element={<Sobre/>}/>
 <Route path="/contato" element={<Contato/>}/>
 </Routes>
 </BrowserRouter>

</div>

 );
}
export default App
