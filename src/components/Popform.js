import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
class Popform extends Component{
    constructor(props){
        super(props)
        this.state = {
           open: this.props.open
        }
        this.enviar = this.enviar.bind(this)
    }
    enviar = e =>{
        e.preventDefault()
        let url = "http://localhost:5000/save"
        let reserva = {
            nombre: e.target[0].value,
            dni: e.target[1].value,
            telefono: e.target[2].value,
            direccion: e.target[3].value,
            pin: e.target[4].value
        }
        fetch(url,{
            method: "POST",
            body: JSON.stringify({
                content:reserva
            })
        })
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                console.log(respuesta)
                if(respuesta.ok == true){
                    this.setState({
                        error: false,
                        messageForm: "Se ha realizado la reserva exitosamente"
                    })
                    setTimeout(() =>{
                        window.location.href="/"
                    }, 2000)
                }
                else{
                    this.setState({
                        error: true,
                        messageForm: "Ocurrió un error en la realización de la reserva"
                    })
                }
                
            })
        
    }
    render = () =>{
        let div_message = ""
        this.state.error == null 
        ? div_message = null
        : this.state.error 
        ? div_message = <div className="alert alert-danger">{this.state.messageForm}</div>
        : div_message = <div className="alert alert-success">{this.state.messageForm}</div>
        return(
            <Modal open={this.props.open} onClose={this.props.onClose}>
                <div className="container w-100 px-5">
                    <h2>Haz tu reserva</h2>
                    <form method="POST" onSubmit={ e => this.enviar(e)}>
                        <div className="form-group text-center">
                            <label for="name" className="col-form-label">Nombre</label>
                            <input name="name" className="form-control" id="name" type="text" required />
                        </div>
                        <div className="form-group text-center">
                            <label for="dni" className="col-form-label">DNI</label>
                            <input type="text" className="form-control" name="dni" id="dni" required maxLength="9"/>
                        </div>
                        <div className="form-group text-center">
                            <label for="telefono" className="col-form-label">Telefono</label>
                            <input type="tel" className="form-control" name="tel" id="telefono" required maxLength="9"/>
                        </div>
                        <div className="form-group text-center">
                            <label for="direccion" className="col-form-label">Direccion</label>
                            <input type="text" className="form-control" name="direccion" id="direccion" required />
                        </div>
                        <div className="form-group text-center">
                            <label for="pin" className="col-form-label">Pin</label>
                            <input type="text" className="form-control" name="pin" id="pin" maxLength="4" minLength="4" required />
                            <small className="form-text text-muted">Este pin servirá para poder borrar tu reserva</small>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                            <button type="submit" className="btn btn-success">
                                Reservar
                            </button>
                            <button type="reset" className="btn btn-danger">
                                Borrar
                            </button>
                        </div>
                        {div_message}
                    </form>
                </div>
            </Modal>
        )
    }
}
export default Popform;