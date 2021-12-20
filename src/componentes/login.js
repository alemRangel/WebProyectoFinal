import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Draggable from "./draggable";
import "./login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(e){
        this.setState({email: e.target.value});
    }

    handleChangePass(e){
        this.setState({pass: e.target.value});
    }

    handleSubmit(e){
        alert("Submiteadi");
        e.preventDefault();
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
                <input type="submit" value="Entrar Al Sistema" />
                <Link to = "/perfil/new">Nuevo Perfil</Link>
            </form>
        );
    }

}

export default Login;

