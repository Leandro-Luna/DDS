
import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import './verAgendaSec.css'

const VerAgendaSec = () => {
    return (
      <div className='login_container-agenda'>
          <div className='sec-calendario-cuadro'>
            <div className='sec-calendario-titulo'>Calendario de citas</div>
            <div className='sec-calendario-datos'><CalendarComponent className='secretaria-calendario'></CalendarComponent></div>
          </div>
          <div className='btn-volver3'>
                    <Link to='/menuSecretaria'><button>Volver al menú</button></Link>
            </div>
      </div>
    )
  }
  export default VerAgendaSec