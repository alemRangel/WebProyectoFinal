import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Home extends React.Component {

    state = {
        data: [],
        showAlert: false,
        alertText: ""
    }

    componentDidMount() {
        axios.get("http://localhost:8100/CRUD_2021/mostrar").then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.info(error);
            this.setState({ showAlert: true, alertText: "ERROR EN LA OBTENCION DE DATOS" });
        })
    }
 

    render() {
        const { data, showAlert, alertText } = this.state;
        return (
            <div>
                <h1>Crear, Altas, BAJAS y Cambios</h1>
                <table>
                    <tr>
                        <td>pregunta</td>
                        <td>opciones</td>
                       
                    </tr>
                
                    <tr>
                    {
                            data.map(pregunta => {
                                return <Pregunta {...pregunta} />
                            })
                        }
                    </tr>
                </table>
                <a href="http://localhost:8100/CRUD_2021/">insertar pregunta</a>
             
            </div>

      
        )
    }

}

export default Home;