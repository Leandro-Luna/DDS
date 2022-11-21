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
const ReporteClientes = ({vista}) => {
    return (

    <table className='solicitud-cita-caj-tabla'>
        <tbody>
            <tr className='solicitud-cita-caj-tabla-titulo'>
                <th>{vista}</th>
                <th>Cliente</th>
                <th>Tipo</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th></th>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
            <tr>
                <td>{formatoFecha(vista)}</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
                <td>xxxxxxxxxxxxx</td>
            </tr>
 


        </tbody>
    </table>
    )
}
export default ReporteClientes