import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Perfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nombre: '',
            apellido: '',
            sexo: '',
            pass: ''
        };
        
    }


    render() {
        return (
                   <div>Perfil New</div>
        );
    }

}

export default Perfil;

