import React, { useEffect, useState } from 'react'
import { Users } from '../helpers/Url.js';
import getData from '../helpers/GetData.js';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

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
    const FormLogin = styled.form`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    
    `


const Login = () => {
    //estado donde se almacena usuarios BD
    const [user, setUser] = useState()
    //Estado donde se almacena datos del formulario
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        const conexion = async () => {
            const usersBD = await getData(Users)
            setUser(usersBD)
        }
        conexion()
    }, [])


    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault();

        // const user = usersBD.find((u) => u.email === form.email)
        const userEmail = user.find((e) => e.email == form.email)
        const userNum = user.find((e) => e.phone == form.email)
        const userPass = user.find((e) => e.password == form.password)
        // console.log(user)
        if ((userEmail && userPass) || (userNum && userPass)) {
            // validar contra base de datos
            navigate("/maindisplay")
        } else {
            alert("No existe la persona")
            // mostrar alerta de error de login
        }

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }


    return (
        <>
            <Container>
                <ContainerSecundario>
                    <FormLogin action="" onSubmit={handleSubmit}>
                        <TextField sx={{margin:"20px"}} type='text' id="outlined-basic" label="Ingresar Email o telefono" variant="outlined" name='email' onChange={handleChange} />
                        <TextField sx={{margin:"20px"}} id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password" name='password' onChange={handleChange} />
                        <Button sx={{margin:"20px"}} type='submit' variant="outlined">Iniciar Sesión</Button>
                    </FormLogin>

                    <span style={{marginBottom:"20px"}} onClick={() => { navigate("/register") }}>Registrarme</span>
                </ContainerSecundario>

            </Container>




        </>
    )
}

export default Login