import React from 'react'
import { Link } from 'react-router-dom'
import './miCuentaCli.css' 
import Usuario from '../../imagenes/usuario.png'

const MiCuentaCli = () => {
    return(
        <div className='fondo-mi-cuenta' >
            <div className='contenedor-mi-cuenta'>
                <div className='contenedor-titulo'>
                        <h1 > 
                            ¡Bienvenido!
                        </h1>
                </div>
                    <h1 className='usuario'> <center> Usuario: xxxxxxxxxxxxxxx </center></h1>
                    <div className='contenedor-donde'>
                            <form method='POST' className='datos-usuario'>
                                    <label> Nombre y apellido: </label>
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                    <label> Contraseña: </label>
                                    <p>*************</p>
                                    <button className='btn-cambiar-contraseña'> Cambiar contraseña </button>                   
                            </form>
                        <div className='fotoUsu'>
                            <img  className='User' src={Usuario}  />
                        </div>
                    </div>
            </div>             
                        
                    
        </div>

   )

}
export default MiCuentaCli