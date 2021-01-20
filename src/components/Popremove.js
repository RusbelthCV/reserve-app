import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
class Popremove extends Component{
    constructor(props){
        super(props) 
    }
    render = () =>{
        return(
            <Modal open={this.props.open} onClose={this.props.onClose} center>
                <div className="container px-5">
                    <p className="h4">¿Estás seguro de eliminar esta reserva?</p>
                    <div className=" d-flex justify-content-center">
                        <button className="btn btn-danger">Eliminar reserva</button>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default Popremove