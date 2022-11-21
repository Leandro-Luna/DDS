
import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import './verAgendaSec.css'
import TimelineGrouping from './timeLine.jsx'
const VerAgendaSec = () => {
    return (
      <div className='login_container-agenda'>
          <TimelineGrouping />
          <div className='btn-volver3'>
                    <Link to='/menuSecretaria'><button>Volver al menú</button></Link>
            </div>
      </div>
    )
  }
  export default VerAgendaSec