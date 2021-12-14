import * as React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Draggable from "./componentes/draggable";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import Ratio from "./componentes/Ratio";
import Perfil from "./componentes/Perfil";

function App (){
    return (            
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="perfil/">
                        <Route path="new" element={<Perfil />} />
                        <Route path="show" element={<Ratio />} />
                    </Route>
                    <Route path="ratio" element={<Ratio />} />
                    <Route path="drag" element={<Draggable />} />
                </Routes>
            </Router>
        );
}
export default App;