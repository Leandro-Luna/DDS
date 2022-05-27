import React, { useState }   from 'react'
import { Link } from 'react-router-dom'
import './consultarCliente.css'
import Select from "react-select";
import ClientesActuales from './clientesActuales';
import ClientesAntiguos from './clientesAntiguos';
import HistoricoClientes from './historicoClientes';
const options= [
  { value: 1, label:'Actuales'},
  { value: 2, label:'Antiguos'},
  { value: 3, label:'Todos'},
];

const ConsultarCliente = () => {
    const [opt, setOpt] = useState([]);
    return (
      <div className='login_container'>
            <div className='select-cliente' >
              <Select 
              options={options}
              value={opt}
              onChange={setOpt}
              placeholder="Clientes"
              className='select-titulo'
              />
            </div>
            <div className='cliente-cuadro' >
              <div className='cliente-cuadro-titulo'>
              {opt.value ? <h1>{opt.label}</h1>: <h1>Seleccione que clientes quiere consultar</h1> }
              </div>
              <div className='cliente-cuadro-datos'>
              {(opt.value == 1) && <ClientesActuales />}
              {(opt.value == 2) && <ClientesAntiguos />}
              {(opt.value == 3) && <HistoricoClientes />}
              </div>
            </div>
            <Link to='/menuJefeComer'><button className='boton-volver-Menu'> Volver al Menu </button></Link>
        </div>
    )
  }
  
  export default ConsultarCliente