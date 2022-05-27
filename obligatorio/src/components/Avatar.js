import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react";

function ImageAvatars() {

  var cookieValor = document.cookie

  var direccion = 'http://localhost:777/users?id=';
  function getUsersById(){
  return fetch(direccion + cookieValor)
  .then(response => response.json())
  }
  
  //obtener sitios
  const [users, setUsers] = useState([])
      useEffect(() => {
      getUsers()
  })
  
  function getUsers(){
    getUsersById()
    .then(response => {
      setUsers(response)
    })
  }


      return (
        <>{
          users.map(user => {
            return (
                <Avatar
                  alt={user.user}
                  src={user.imagen}
                  sx={{ width: 46, height: 46 }}
                />
          )
        })
        }
      </>
    );
  }

export { ImageAvatars }