import React from 'react'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import {Inicio, Login, CatalogoSni, ClienteVerPropiedadSni, ClienteCompletarFormularioSni, Registro, InicioReg, 
        CatalogoReg, ClientePagVerPropiedadReg, ClienteCompletarFormularioReg, ClienteContactoSni, ClienteContactoReg, 
        MenuSecretaria, VerSolicitudCitaSecretaria, VerAgendaSecretaria, VerDocumentacionClienteSecretaria,
        MenuEmpleadoMarketing, ModificarImagenPropiedad, MenuAdminSitio, EmpleadoCompletarFormulario, BajaEmpleado,
        AgYmdClienteFisico, AgYmdClienteCorporativo, VerClienteFisico, VerClienteCorporativo,AgendaAgentes2,CambiarEstado2,
        AgregarPropiedad2,AgenteVerPropiedad2,CatalogoEmp2,MenuAgentes2,Nosotros2, Nosotros2Reg, MiCuentaCliente, MenuCajera, PagoAlquilerCajera,
        PagoVentaCajera, PagoAlquiler, RegistroTransacciones, PagoVenta, ConsultarTransacciones, CierreCaja, VerDetalleCierreCaja,
        RegistrarEntradaSalida, EntradaSalida, MovimientosEntrada, MovimientosSalida, MiCuentaEmpleado,ArchivoClientes2, 
        ConsultarTransJefe2,RegistroTransJefe2, MenuJefaAdministracion2, 
        ConsultarReportes2,MenuGerente2,ReportesGerente2, ReportesVentasGerente2, ReportesAlquilerGerente2,
         ReportesClientesGerente2,ReportesPropiedadesGerente2, ReporteVentaJefa2, 
        ReporteAlquilerJefa2, ReporteEntradaSalida2,
        MenuJefeComercializacion, VerSeguimientoJefeComer, SeleccionReporte, ConsultarPropiedades,ConsultarClientes
      } from './paginas'


const App = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Inicio/>}/>
            <Route exact path='/log-in' element={<Login/>}/>
            <Route exact path='/catalogoSNI' element={<CatalogoSni/>}/>
            <Route exact path='/verPropiedad' element={<ClienteVerPropiedadSni/>}/>
            <Route exact path='/completarFormulario' element={<ClienteCompletarFormularioSni/>}/>
            <Route exact path='/registrarse' element={<Registro/>}/>
            <Route exact path='/clienteReg' element={<InicioReg/>}/>
            <Route exact path='/catalogoReg' element={<CatalogoReg/>}/>
            <Route exact path='/verPropiedadReg' element={<ClientePagVerPropiedadReg/>}/>
            <Route exact path='/completarFormularioReg' element={<ClienteCompletarFormularioReg/>}/>
            <Route exact path='/contactoSni' element={<ClienteContactoSni/>}/>
            <Route exact path='/contactoReg' element={<ClienteContactoReg/>}/>
            <Route exact path='/menuSecretaria' element={<MenuSecretaria/>}/>
            <Route exact path='/verSolicitudCitaSec' element={<VerSolicitudCitaSecretaria/>}/>
            <Route exact path='/verAgendaSec' element={<VerAgendaSecretaria/>}/>  
            <Route exact path='/verDocumentacionClienteSec' element={<VerDocumentacionClienteSecretaria/>}/>
            <Route exact path='/menuEmpleadoMarketing' element={<MenuEmpleadoMarketing/>}/>
            <Route exact path='/modificarImagenPropiedad' element={<ModificarImagenPropiedad/>}/>
            <Route exact path='/menuAdministradorSitio' element={<MenuAdminSitio/>}/>
            <Route exact path='/completarFormularioEmpleado' element={<EmpleadoCompletarFormulario/>}/>
            <Route exact path='/bajaEmpleado' element={<BajaEmpleado/>}/>
            <Route exact path='/agYmdClienteFisico' element={<AgYmdClienteFisico/>}/>
            <Route exact path='/agYmdClienteCorporativo' element={<AgYmdClienteCorporativo/>}/>
            <Route exact path='/verClienteFisico' element={<VerClienteFisico/>}/>
            <Route exact path='/verClienteCorporativo' element={<VerClienteCorporativo/>}/>
            <Route exact path='/MenuAgentes' element={<MenuAgentes2/>}/>
            <Route exact path='/AgenteCatalogo' element={<CatalogoEmp2/>}/>
            <Route exact path='/AgenteVerPropiedad' element={<AgenteVerPropiedad2/>}/>
            <Route exact path='/AgregarPropiedades' element={<AgregarPropiedad2/>}/>
            <Route exact path='/CambiarEstado' element={<CambiarEstado2/>}/>
            <Route exact path='/AgendaAgentes' element={<AgendaAgentes2/>}/>
            <Route exact path='/Nosotros' element={<Nosotros2/>}/>
            <Route exact path='/NosotrosReg' element={<Nosotros2Reg/>}/>
            <Route exact path='/miCuenta' element={<MiCuentaCliente/>}/>
            <Route exact path='/menuCajera' element={<MenuCajera/>}/>
            <Route exact path='/pagoAlquilerCajera' element={<PagoAlquilerCajera/>}/>
            <Route exact path='/pagoAlquiler' element={<PagoAlquiler/>}/>
            <Route exact path='/pagoVentaCajera' element={<PagoVentaCajera/>}/>
            <Route exact path='/pagoVenta' element={<PagoVenta/>}/>
            <Route exact path='/registroTransacciones' element={<RegistroTransacciones/>}/>
            <Route exact path='/consultarTransacciones' element={<ConsultarTransacciones/>}/>
            <Route exact path='/cierreCaja' element={<CierreCaja/>}/>
            <Route exact path='/verDetalleCierreCaja' element={<VerDetalleCierreCaja/>}/>
            <Route exact path='/entradaSalida' element={<EntradaSalida/>}/>
            <Route exact path='/registrarEntradaSalida' element={<RegistrarEntradaSalida/>}/>
            <Route exact path='/movimientosEntrada' element={<MovimientosEntrada/>}/>
            <Route exact path='/movimientosSalida' element={<MovimientosSalida/>}/>
            <Route exact path='/miCuentaEmpleado' element={<MiCuentaEmpleado/>}/>
            <Route exact path='/ArchivoClientes' element={<ArchivoClientes2/>}/>
            <Route exact path='/ConsultarTransJefe' element={<ConsultarTransJefe2/>}/>
            <Route exact path='/RegistroTransJefe' element={<RegistroTransJefe2/>}/>
            <Route exact path='/MenuJefaAdministracion' element={<MenuJefaAdministracion2/>}/>
            <Route exact path='/ConsultarReportes' element={<ConsultarReportes2/>}/>
            <Route exact path='/MenuGerente' element={<MenuGerente2/>}/> 
            <Route exact path='/ReportesGerente' element={<ReportesGerente2/>}/> 
            <Route exact path='/ReportesVentasGerente' element={<ReportesVentasGerente2/>}/> 
            <Route exact path='/ReportesAlquilerGerente' element={<ReportesAlquilerGerente2/>}/> 
            <Route exact path='/ReportesClientesGerente' element={<ReportesClientesGerente2/>}/> 
            <Route exact path='/ReportesPropiedadesGerente' element={<ReportesPropiedadesGerente2/>}/> 
            <Route exact path='/ReporteVentaJefa' element={<ReporteVentaJefa2/>}/> 
            <Route exact path='/ReporteAlquilerJefa' element={<ReporteAlquilerJefa2/>}/> 
            <Route exact path='/ReporteEntradaSalida' element={<ReporteEntradaSalida2/>}/> 
            <Route exact path='/menuJefeComer' element={<MenuJefeComercializacion/>}/>
            <Route exact path='/agendaJefeComer' element={<VerSeguimientoJefeComer/>}/>
            <Route exact path='/seleccionReporte' element={<SeleccionReporte/>}/>
            <Route exact path='/consultarPropiedades' element={<ConsultarPropiedades/>}/>
            <Route exact path='/consultarClientes' element={<ConsultarClientes/>}/>
        </Routes>
    </div>
  )
}

export default App