import React from 'react'
import { Link } from 'react-router-dom'
import './entradaSal.css'

const EntradaSal = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-reg5'>
                    <h1 className='cuadro-reg-h1'>Registrar entrada/salida </h1>
                    <form method='POST' className='cuadro-reg-form-entsal'>   
                            <label>Fecha: 99/99/9999 - Hora: 99:99hs</label>
                            <label> Concepto:</label>
                            <input type='text' name='concepto'></input>
                            <label> Monto:</label>
                            <input type='number' name='integer'></input>
                            <label>Tipo de movimiento:</label>
                                <select name="Tipo"  className='selectAltura2' >
                                        <option>Entrada</option>
                                        <option>Salida</option>
                                </select>

                            <input className='cuadro-reg-form-entsal-submit' type='submit' value='Registrar'></input>
                    </form>     
          </div>
                    <Link to='/registrarEntradaSalida'><button className='btn-volverEntradaSalida'> Volver atrás </button></Link>
      </div>
    )
  }
  
  export default EntradaSal