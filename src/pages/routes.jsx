import { Routes, Route} from "react-router-dom";
import Home from './home'
import Servicos from './servicos'
import Contato from "./contato"
import Cliente from "./cliente";
import Sobre from './sobre/index';
import Enviado from "./enviado";
import { useEffect } from "react/cjs/react.production.min";


function Router() {
    // useEffect(()=>{
       

    // },[])
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/servicos" element={<Servicos />} />
            <Route exact path="/sobre" element={<Sobre />} />
            <Route exact path="/contato" element={<Contato />} />
            <Route exact path="/cliente" element={<Cliente />} />
            <Route exact path="/enviado" element={<Enviado/>} />
            <Route path="/:email" element={<Home />} />

        </Routes>
    )
}
export default Router
