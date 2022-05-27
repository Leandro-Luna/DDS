
import React from 'react'
import { Link } from 'react-router-dom'
import './pagoVent.css'

const PagoVent = () => {
    return (
      <div className='fondo-form-pago'>
            <div className='cuadro-Formulario-pago'>
                    <div  className='titulo-formulario-pago '>
                            <h1> Datos de la propiedad </h1>
                    </div>  
                          <div className='cuerpo-formulario-pago '>
                                        <form method='POST' className='cuerpo-formulario-completo'>
                                                <label className='label-inmueble'> Código del inmueble: 99999999999</label>
                                                <label> Tipo: xxxxxxxxxxxxxxx</label>
                                                <label> Ubicación: xxxxxxxxxxxxxxxx</label>
                                                <label> Localidad: xxxxxxxxxxxxxxxx</label>
                                                <label className='label-prop'> <strong>Información del propietario:</strong></label>
                                                <label> Correo: xxxxxxxxxxxxx</label>
                                                <label> Teléfono: 99999999</label>
                                                <label> Cantidad de baños: 9999</label>
                                                <label> Antigüedad: 9999</label>
                                                <label> País: xxxxxxxxxx</label>
                                                <label> Provincia: xxxxxxxxxxx</label>
                                                <label> DNI cliente: 99.999.999</label>
                                                <label> Número de cliente: 999999</label>
                                                <label> NyA: xxxxxxxxxxxxxxxxxxxx </label>
                                                <label>Artefactos: xxxxxxxxx</label>
                                                <label>Servicios: xxxxxxxxxxxxxx</label>
                                                <label>Dirección: xxxxxxxxxxxx</label>
                                                <label>Codigo Postal: 9999</label>
                                                <label>Tipo de cliente: xxxxxxxxxx</label>
                                                <label> Dirección de cliente: xxxxxxxxxxxxxxxx</label>
                                                <label className='label-precio'><strong> PRECIO TOTAL:</strong> 9999999999999999</label>
                                                
                                                <div className='labels-inputs'>
                                                        <label> Tipo de venta:</label>
                                                        <select name="Tipo"  className='selectAltura1' >
                                                                <option>Financiada</option>
                                                                <option>Total</option>
                                                        </select>
                                                        <label>Moneda:</label>
                                                        <input type='text' name='moneda'></input>
                                                        <label> Porcentaje de comisión: </label>
                                                        <input type='number' name='comision'></input>
                                                        <label>Precio: </label>
                                                        <input type='number' name='precio'></input>
                                                        <label>Forma de pago:</label>
                                                        <input type='text' name='Forma de Pago'></input>
                                                </div>
                                        </form>    

                                       
                    </div>
            </div>
            <div className='btn-container-pago' >                                        
                        <form  method='POST'>
                                <input className='cuerpo-form-boton-cajera' type='submit' value='Asentar pago'></input>
                        </form>
                        <Link to='/MenuCajera'><button className='boton-volver-Menu-cajera'> Volver al menú </button></Link>
            </div>

      </div>
    )
  }
  
  export default PagoVent