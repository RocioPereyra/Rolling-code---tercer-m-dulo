import React, { Fragment, useState } from 'react'

const Titulo = (props) => {
    // aqui va la logica


    const [msj, setMsj]=useState('State sin cambiar')

    const modificarState= ()=>{

        setMsj('State modificado')
    }

    return (
        // aqui se escribe jsx
        <Fragment>
            <h1>Hello {`${props.amigo} (${msj})`}</h1>
            <button onClick={modificarState}>Click me</button>
        </Fragment>
    )
}

export default Titulo
