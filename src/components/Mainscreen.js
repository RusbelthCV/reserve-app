import React, { Component } from 'react'
import Popform from './Popform'
import Popremove from './Popremove'
import 'react-responsive-modal/styles.css';
class Mainscreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            reservas: [],
            openForm: false,
            openRemove: false
        }
        this.onOpenModalForm = this.onOpenModalForm.bind(this)
        this.onCloseModalForm = this.onCloseModalForm.bind(this)
        this.onOpenModalRemove = this.onOpenModalRemove.bind(this)
        this.onCloseModalRemove = this.onCloseModalRemove.bind(this)
    }
    componentDidMount = () => {
        let url = "http://localhost:5000/all"
        fetch(url)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    reservas: data.bookings,
                    messageForm: ""
                })
            })
    }
    
    onOpenModalRemove = dni =>{
        this.setState({
            openRemove: true,
            dni: dni
        })
    }
    onCloseModalRemove = () =>{
        this.setState({
            openRemove: false
        })
    }
    onOpenModalForm = () =>{
        if(this.state.reservas.length <= 33){
            this.setState({
                openForm: true
            })    
        }
        else{
            alert("Lo sentimos, debido a las normativas del covid no podemos permitir alojar más personas en el local")
        }
    }
    onCloseModalForm = () =>{
        this.setState({
            openForm: false
        })
    }
    render = () => {
        const open  = this.state.openForm
        const openRemove = this.state.openRemove
        const max_bookings = 33
        let colorText = ""
        this.state.reservas.length <= 15 ? colorText = "text-success" 
        : this.state.reservas.length <= max_bookings - 5 
        ? colorText = "text-warning" : colorText = "text-danger"
        let bookings = this.state.reservas.map(el => <tr key = {el.id}>
            <td className="align-middle">
                {el.nombre}
            </td>
            <td className="align-middle">
                {el.direccion}
            </td>
            <td className="align-middle">
                {el.telefono}
            </td>
            <td className="d-flex justify-content-around align-items-center">
                {el.dni}
                <button className="btn btn-danger" onClick={ () => this.onOpenModalRemove(el.dni) } >
                    Eliminar reserva
                </button>
            </td>
        </tr>)
        return(
            <div className="container">
                <table className="table table-striped table-info table-bordered table-hover">
                    <thead>
                        <tr>
                            <td>Nombre</td>
                            <td>Dirección</td>
                            <td>Teléfono</td>
                            <td>Dni</td>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings}
                    </tbody>
                </table>
                <div className="d-flex justify-content-between px-5">
                    <p className = {colorText}>
                        {this.state.reservas.length}/{max_bookings}
                    </p>
                    <button className="btn btn-primary" onClick={this.onOpenModalForm}>
                        Haz tu reserva ya!
                    </button>
                </div>
                <Popform open={open} onClose={this.onCloseModalForm} />
                <Popremove open={openRemove} onClose={this.onCloseModalRemove} dni={this.state.dni}/> 
            </div>
        )
    }
}
export default Mainscreen;