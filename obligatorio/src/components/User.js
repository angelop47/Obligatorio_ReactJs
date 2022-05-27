import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SiteUser } from "./SiteUser"
import { ReviewUser } from "./ReviewUser"

const User = () => {

  let { id } = useParams(); 
var direccion = 'http://localhost:777/users?id=';
function getUser(){
return fetch(direccion + id)
.then(response => response.json())
}

  //obtener usuarios
const [users, setUsers] = useState([])
useEffect(() => {
getUsers()
},)

function getUsers(){
getUser()
.then(response => {
setUsers(response)
})
}
return (
  <>{
    users.map(user => {
      return(
        <div style={{ display: 'flex',
                      width: '90%',
                      margin: 'auto',
                      justifyContent: 'space-around',
                      flexWrap: 'wrap',
                      borderRadius: '10px',
                      marginBottom: '30px'
                      }}>
        <Card sx={{ margin: '1%',
                    width: '23%',
                    objectFit: 'cover'
                    }} >
          <Box>
            <CardContent>
              <Typography component="div" variant="h5">
                {user.user}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {user.pais}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" component="div">
                {user.ciudad}
              </Typography>
            </CardContent> 
          </Box>
          <CardMedia
            component="img"
            sx={{ width: '100%',
                  objectFit: 'cover'}}
            image={user.imagen}
            alt="Imagen"
            />
        </Card>
        </div>
        )
        })
        }
        <Typography component="div" variant="h5">
                Sitios publicados por el Usuario
        </Typography>
        <SiteUser></SiteUser>
        <Typography component="div" variant="h5">
                Reviews publicados por el Usuario
        </Typography>
        <ReviewUser></ReviewUser>
      
      </>
    );
  }

export{ User }