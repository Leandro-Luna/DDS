import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './seguimientoJefeComer.css';

const SeguimientoJefeComer = () => {
  const [date, setdata] = useState(new Date());

  return (
    <div className="contenedor">
      <div className="login_container-agenda">
        <div className="acti-y-calendario">
            <div className="jefecomer-cuadro">
            <div className="jefecomer-titulo">Calendario</div>
            <div className="jefecomer-datos">
                <CalendarComponent
                className="jefecomer-calendario"
                onChange={setdata}
                value={date}
                ></CalendarComponent>
            </div>
            </div>
            <div className="actividades">
                <div className="actividades-titulo">
                <p>
                    {date.value ? (
                    date.value && date.value.toDateString()
                    ) : (
                    <p>Seleccione fecha</p>
                    )}
                </p>
                </div>
                <div className='agenda-jefeComer-actividades'>
                    <table className="acitividades-dia">
                        <tbody>
                            <tr className="actividades-dia-titulo">
                                <th>Hora</th>
                                <th>Actividad</th>
                                <th>Encargado</th>
                                <th>Estado</th>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Finalizada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Finalizada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Cancelada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Finalizada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Cancelada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Finalizada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Finalizada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Cancelada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Cancelada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Cancelada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Cancelada</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Cancelad</td>
                            </tr>
                            <tr>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>Finalizada</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="btn-volver3">
          <Link to="/menuJefeComer">
            <button>Volver al menú</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default SeguimientoJefeComer;