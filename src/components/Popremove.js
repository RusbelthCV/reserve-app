import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
class Popremove extends Component{
    constructor(props){
        super(props) 
        this.enviar = this.enviar.bind(this)
    }
    enviar = (e) => {
        e.preventDefault()
        let reserva = {
            dni: this.props.dni,
            pin: e.target[0].value
        }
        let url = "http://localhost:5000/delete"
        fetch(url,{
            method: "POST",
            body: JSON.stringify(reserva)
        })
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                if(respuesta.ok){
                    window.location.href = "/"
                }
            })
    }
    render = () =>{
        return(
            <Modal open={this.props.open} onClose={this.props.onClose} center>
                <div className="container px-5">
                    <p className="h4">¿Estás seguro de eliminar esta reserva?</p>
                    <div className=" d-flex justify-content-center">
                        <form method="POST" onSubmit={(e) => this.enviar(e)}>
                            <div className="form-group text-center">
                                <label for="pin">Pin</label>
                                <input type="text" id="pin" name="pin" minLength="4" maxLength="4" className="form-control" required />
                            </div>
                            <div className="btn-group">
                                <button className="btn btn-danger" type="submit">Eliminar reserva</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </Modal>
        )
    }
}
export default Popremove