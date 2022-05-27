import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getUserById } from '../utils';
import { useEffect, useState } from "react";
import { Itinerary } from "./Itinerary";

function Usuario() {

  //obtener usuarios
const [users, setUsers] = useState([])
useEffect(() => {
getUsers()
},)

function getUsers(){
getUserById()
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
        <Itinerary></Itinerary>
      </>
    );
}

export { Usuario }