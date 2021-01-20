import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
class Popform extends Component{
    constructor(props){
        super(props)
        this.state = {
           open: this.props.open 
        } 
    }
    render = () =>{
        return(
            <Modal open={this.props.open} onClose={this.props.onClose} center>
                <div className="container">
                    <h2>Haz tu reserva</h2>
                    <form>
                        <div className="form-group text-center">
                            <label for="name" className="col-form-label">Nombre</label>
                            <input name="name" className="form-control" id="name" type="text" required />
                        </div>
                        <div className="form-group text-center">
                            <label for="dni" className="col-form-label">Dni</label>
                            <input type="text" className="form-control" name="dni" id="dni" required />
                        </div>
                        <div className="form-group text-center">
                            <label for="telefono" className="col-form-label">Telefono</label>
                            <input type="tel" className="form-control" name="tel" id="telefono" required />
                        </div>
                        <div className="form-group text-center">
                            <label for="direccion" className="col-form-label">Direccion</label>
                            <input type="text" className="form-control" name="direccion" id="direccion" required />
                        </div>
                        <div className="form-group d-flex justify-content-between">
                            <button type="submit" className="btn btn-success">
                                Reservar
                            </button>
                            <button type="reset" className="btn btn-danger">
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        )
    }
}
export default Popform;