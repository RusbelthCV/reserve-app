import React, { Component } from 'react'

class Mainscreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            reservas: []
        }
    }
    componentDidMount = () => {
        let url = "http://localhost:5000/all"
        fetch(url)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    reservas: data.data
                })
            })
    }
    render = () => {
        return(
            <div className="container">
                <table className="table table-striped table-info table-bordered table-hover">
                    <thead>
                        <tr>
                            <td>Nombre</td>
                            <td>Dirección</td>
                            <td>Teléfono</td>
                        </tr>
                    </thead>
                    <tr><td>{this.state.reservas}</td></tr>
                </table>
            </div>
        )
    }
}
export default Mainscreen;