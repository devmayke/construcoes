import { Routes, Route} from "react-router-dom";
import Home from './home'
import Servicos from './servicos'
import Contato from "./contato"
import Cliente from "./cliente";
import Sobre from './sobre/index';
import Enviado from "./enviado";


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/enviado" element={<Enviado/>} />
        </Routes>
    )
}
export default Router
