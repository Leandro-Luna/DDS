import React, { useState }   from 'react'
import { Link } from 'react-router-dom'
import './consultarPropiedades.css'
import Select from "react-select";
import PropiedadesDisponibles from './propiedadesDisponibles'
import PropiedadesVendidas from './propiedadesVendidas';
import HistoricoPropiedades from './historicoPropiedades';
const options= [
  { value: 1, label:'Disponibles'},
  { value: 2, label:'Vendidas'},
  { value: 3, label:'Todas'},
];

const ConsultarPropiedad = () => {
    const [opt, setOpt] = useState([]);
    return (
      <div className='login_container'>
            <div className='select-propiedad' >
              <Select 
              options={options}
              value={opt}
              onChange={setOpt}
              placeholder="Propiedades"
              className='select-titulo'
              />
            </div>
            <div className='propiedad-cuadro' >
              <div className='propiedad-cuadro-titulo'>
              {opt.value ? <h1>{opt.label}</h1>: <h1>Seleccione que propiedades quiere consultar</h1> }
              </div>
              <div className='solicitud-cita-caj-cuadro-datos'>
              {(opt.value == 1) && <PropiedadesDisponibles />}
              {(opt.value == 2) && <PropiedadesVendidas />}
              {(opt.value == 3) && <HistoricoPropiedades />}
              </div>
            </div>
            <Link to='/menuJefeComer'><button className='boton-volver-Menu'> Volver al Menu </button></Link>
        </div>
    )
  }
  
  export default ConsultarPropiedad