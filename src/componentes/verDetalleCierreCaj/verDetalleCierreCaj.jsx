import React from 'react'
import { Link } from 'react-router-dom'
import './verDetalleCierreCaj.css'

const VerDetalleCierreCaj = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-reg1'>
                    <h1 className='cuadro-reg-titulo'>Detalle del movimiento</h1>
                    <div className='cierre-caja-cuadro-datos2'>
                      <form method='POST' className='cuadro-reg-form1'>
                              <label> Número de movimiento: 999999</label>

                              <label> Hora: 99:99</label>
                              <label> Monto: $9999999</label>
                              <label> Comentario: </label>
                              <div className='parrafo-cierre'>
                                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                <br></br>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                              </div>
                      </form>     
                    </div>
          </div>
          <Link to='/cierreCaja'><button className='boton-volver-Menu-cajera-cierre'> Volver atrás </button></Link>
      </div>
    )
  }
  
  export default VerDetalleCierreCaj