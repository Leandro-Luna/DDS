
import React from 'react'
import { Link } from 'react-router-dom'
import './ArchivoClientes.css'


const ArchivoClientes = () => {
    return (
      <div className='fondo-form'>
            <div className='cuadro-Buscar-Cliente-archivo'>
                    <div  className='Titulo-Buscar-Cliente-archivo'>
                            <h1> Buscar cliente</h1>
                    </div>  
                    <div className='cuerpo-Buscar-Cliente-archivo'>           
                        <form method='POST' className='Cuerpo-Codigo-archivo'>       
                                <label>Insertar código del cliente</label>
                                <input className='input-codigo' type='number' name='Espacios'></input>
                                <input className='cuerpo-boton-archivo' type='submit' value='Buscar cliente'></input>
                        </form>    
                    </div>
            </div>         
            <div >                    
                <Link to='/MenuJefaAdministracion'><button className='btn-volverEntradaSalida'> Volver al menú </button></Link>
            </div>


      </div>
    )
  }
  
  export default ArchivoClientes