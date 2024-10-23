import React, { useEffect, useState } from 'react'
import postData from '../helpers/PostData.js'
import { Users } from '../helpers/Url.js'
import getData from '../helpers/GetData.js'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content: center;
    background: #242424;`

const ContainerSecundario = styled.div`
        border-radius: 30px;
    background: #FFFFFF;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    `
const FormRegister = styled.form`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    
    `

const Register = () => {
  const navigation = useNavigate()

  const [datosRegistro, setDatosRegistro] = useState({
    nombre: '',
    email: '',
    numero: '',
    password: '',
  })

  const subirData = async () => {
    const nuevoUsuario = {
      name: datosRegistro.nombre,
      email: datosRegistro.email,
      phone: datosRegistro.numero,
      password: datosRegistro.password,
      coins:0
    }
    await postData(Users, nuevoUsuario)
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(datosRegistro.nombre);
    // TODO: hacer llamada a la API para registrar el usuario

    const user = await getData(Users)
    console.log(user)
    const userEmail = user.find((e) => e.email == datosRegistro.email)
    const userNum = user.find((e) => e.phone == datosRegistro.numero)
    if (userEmail || userNum) {
      alert("Email o Numero ya registrado")
    } else {
      subirData()
      alert("Usuario registrado correctamente")
      navigation("/login")

    }


  }

  const handleChange = (e) => {
    e.preventDefault();
    // TODO: Actualizar state con los valores del formulario
    // e.target.name: nombre del input
    // e.target.value: valor del input
    // e.persist(): permite que el evento persista en el state y pueda ser accedido en el callback de handleChange
    console.log(e.target.value)
    setDatosRegistro({ ...datosRegistro, [e.target.name]: e.target.value })
  }



  return (
    <>
      <Container>
        <ContainerSecundario>
          <h2>Registro</h2>
          <FormRegister action="" onSubmit={handleSubmit}>

            <input type="name" id="nombre" name="nombre" placeholder='Ingrese nombre' required onChange={handleChange} />

            <input type="email" id="nombre" name="email" placeholder='ingrese email' required onChange={handleChange} />

            <input type="number" id='numero' name='numero' placeholder='ingrese numero' required onChange={handleChange} />

            <input type="password" id="password" name="password" placeholder='ingrese contraseña' required onChange={handleChange} />

            <button type="submit">Enviar</button>
          </FormRegister>

          <span onClick={() => navigation("/login")}>Regresar Login</span>

        </ContainerSecundario>

      </Container>

    </>
  )
}

export default Register