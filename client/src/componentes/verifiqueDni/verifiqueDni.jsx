
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './verifiqueDni.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifiqueDni = () => {

  const navigate = useNavigate();

  const [dni,setDni]=useState()

  const handleChange=(e)=>{
    e.preventDefault()
    setDni(e.target.value)

  }



  const onSubmit= async(e)=>{
    e.preventDefault()
    const info=await axios.post(`http://localhost:3001/cliente?dni=${dni}`)
    if (info.data){
      alert('El cliente ya existe, propiedad creada')
      navigate('/MenuAgentes')
    }else{
      alert('El cliente no existe, inserte sus datos')
      navigate(`/ingreseDatos/${dni}`)

    }
  }
    return (
      <div className='login_container-principal'>
          <div className='cuadro-is'>
              <h1 className='cuadro-is-h1'>Verifique DNI del cliente</h1>
              <form method='POST' className='cuadro-is-form'>
                    <label> Dni:</label>
                    <input type='integer' name='email' value={dni} onChange={(e)=>handleChange(e)}></input>
                    <input className='cuadro-is-form-submit' type='submit' onClick={onSubmit} value='siguiente'></input>
              </form>     

          </div>
      </div>
    )
  }
  
  export default VerifiqueDni