import React, { useState }   from 'react'
import { Link } from 'react-router-dom'
import './seguimientoReporteJefeC.css'
import Select from "react-select";
import ReportePropiedades from './reportePropiedades';
import ReporteClientes from './reporteClientes';
import ReporteAlquileres from './reporteAlquileres';
import ReporteVentas from './reporteVentas';

const options_tipo = [
  { value: 1, label:'Ventas'},
  { value: 2, label:'Alquileres'},
  { value: 3, label:'Clientes'},
  { value: 4, label:'Propiedades'}
];
const options_vista = [
  { value: 'Dia', label: 'Diaria'},
  { value: 'Mes', label: 'Mensual'},
  { value: 'Año', label: 'Anual'}
];
function archivoReporte(tipo){
  switch (tipo) {
    case 1:
      return ('/files/ReporteVentas.pdf')
    case 2:
      return ('/files/ReporteAlquileres.pdf')
    case 3:
      return ('/files/ReporteClientes.pdf')
    case 4:
      return ('/files/ReportePropiedades.pdf')
    default:
      return (' ')
  }
};
const SeleccionReporteJefeC = () => {
    const [tipo, setTipo] = useState([]);
    const [vista, setVista] = useState([]);
    return (
      <div className='reporte-container'>
            <div className='select-reporte' >
              <Select 
              options={options_tipo}
              value={tipo}
              onChange={setTipo}
              placeholder="Tipo"
              className='select-titulo'
              />
              <Select 
              options={options_vista}
              placeholder="Vista"
              value={vista}
              onChange={setVista}
              className='select-vista'
              />
            </div>
            <div className='reportes' >
              <div className='reportes-titulo'>
              {tipo.value ? <h1>{tipo.label}</h1>: <h1>Seleccione un tipo de reporte y vista</h1> }
              </div>
              <div className='reportes-datos'>
              {(tipo.value == 1) && <ReporteVentas vista={vista.value}/>}
              {(tipo.value == 2) && <ReporteAlquileres vista={vista.value}/>}
              {(tipo.value == 3) && <ReporteClientes vista={vista.value}/>}
              {(tipo.value == 4) && <ReportePropiedades vista={vista.value}/>}
              </div>
            </div>
            <div className="botones">
            <Link to='/menuJefeComer'><button className='boton-volver-Menu'> Volver al Menu </button></Link>
            {(tipo.value>0)?
            <Link to={archivoReporte(tipo.value)} target="_blank" download><button className='boton-imprimir-descargar'> Descargar reporte </button></Link>
            : <button className='boton-imprimir-descargar' > Descargar reporte </button>}
            <button className='boton-imprimir-descargar'> Imprimir reporte </button>
            </div>
        </div>
    )
  }
  
  export default SeleccionReporteJefeC