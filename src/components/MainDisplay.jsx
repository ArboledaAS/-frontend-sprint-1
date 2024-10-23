import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import getData from '../helpers/GetData';
import { Quiz, Users } from '../helpers/Url';
import { Card, CardActions, CardContent } from '@mui/material';
import styled from 'styled-components';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

const ContainerCard = styled.div`
width:100%;
height:fit-content;
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:20px; 
align-items:center;
justify-content: center;
margin-top: 30px;

`

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
background: #242424;
`

const MainDisplay = () => {
  const navigation = useNavigate()

  const [filas, setFilas] = useState()

  useEffect(() => {
    const conexion = async () => {
      let usersBD
      await getData(Quiz).then((element) => { setFilas(element) })

    }
    conexion()


  }, [])




  if (filas == undefined) {
    console.log(filas)
  } else {
    filas.forEach(element => {
      console.log(element)
    });
  }



  return (
    <>
      <Container>

        <ContainerCard>

          {
            
            filas == undefined ? <></> : filas.map((valor, index) => (
              < Card key={index} sx={{ width: "250px", minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {valor.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" >Iniciar Quiz</Button>
                </CardActions>
              </Card>
            ))


          }
        </ContainerCard >



        <Box sx={{ position: "fixed", bottom: 0, display: "flex", width: "100%", flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit">Inicio</Button>
              <Button color="inherit">Datos</Button>
              <Button color="inherit">Perfil</Button>
            </Toolbar>
          </AppBar>
        </Box>

      </Container>




    </>

  )
}

export default MainDisplay