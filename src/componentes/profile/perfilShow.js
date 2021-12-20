import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PerfilNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nombre: '',
            apellido: '',
            sexo: 'indefinido',
            pass: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangeApellido = this.handleChangeApellido.bind(this);
        this.handleChangeSexo = this.handleChangeSexo.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        
    }

    handleChangeEmail(e){
        this.setState({email: e.target.value});
    }

    handleChangePass(e){
        this.setState({pass: e.target.value});
    }

    handleChangeNombre(e){
        this.setState({nombre: e.target.value});
    }

    handleChangeApellido(e){
        this.setState({apellido: e.target.value});
    }

    handleChangeSexo(e){
        this.setState({sexo: e.target.value});
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={this.state.email} onChange={this.handleChangeEmail} />
                </label>
                <label>
                    Password:
                    <input type="password" value={this.state.pass} onChange={this.handleChangePass} />
                </label>
                    Nombre:
                    <input type="text" value={this.state.nombre} onChange={this.handleChangeNombre} />
                <label>
                    Apellido:
                    <input type="text" value={this.state.apellido} onChange={this.handleChangeApellido} />
                </label>
                <label>
                    Sexo:
                    <select value={this.state.sexo} onChange={this.handleChangeSexo}>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="indefinido">Indefinido</option>
                    </select>
                </label>
                <label>
                    Cargar Foto de Perfil
                    <input type="file" ref={this.fileInput} />
                </label>
                <input type="submit" value="Submit" />
                <Link to="/login">Regresar Inicio de Sesión</Link>
            </form>
        );
    }

}

export default PerfilNew;

