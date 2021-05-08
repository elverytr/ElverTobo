import React from 'react';

class PortafolioApp extends React.Component{
    constructor(nombre){
        super()
        //this.nombre = nombre
        this.state = {
            nombre :"Elver Tobo"
        }
    }

    obtenerNombre(){
        return this.nombre
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <h1 style={{color:this.props.color}}>{this.state.nombre}</h1>
            </div>
        )
    }
}

export default PortafolioApp
