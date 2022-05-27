import React from 'react';

function formatoFecha(vista){
    switch (vista) {
        case 'Dia':
            return ('99/99/9999')
        case 'Mes':
            return ('99/9999')
        case 'Año':
            return ('9999')
    }
}
const ReporteAlquileres = ({vista}) => {
    return (

    <table className='solicitud-cita-caj-tabla'>
        <tbody>
            <tr className='solicitud-cita-caj-tabla-titulo'>
                <th>{vista}</th>
                <th>Propiedad</th>
                <th>Dirección</th>
                <th>Agente</th>
                <th>Inquilino</th>
                <th>Monto</th>
                <th></th>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>$9999999</td>
            </tr>
 


        </tbody>
    </table>
    )
}
export default ReporteAlquileres