import { Routes, Route} from "react-router-dom";
import Home from './home'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}
        </Routes>
    )
}
export default Router
