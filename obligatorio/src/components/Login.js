import React from 'react';
import {
  Grid,
  TextField,
  Paper,
  Button
} from '@material-ui/core';
import { useState } from "react";


const LoginPage = () => {

  let [inputValueUser, setInputValueUser] = useState("")
  let [inputValuePassword, setInputValuePassword] = useState("")

  function getUser(){
  return fetch('http://localhost:777/users?user=' + inputValueUser)
  .then(response => response.json())
  .then(data => { 
    data.forEach(users => {
        //console.log("prueba" + users.id)
        if(users.user === inputValueUser && users.password === inputValuePassword){
          console.log(users.user + inputValueUser + users.password + inputValuePassword)
          document.cookie = users.id;
      }
      else{alert("revise los datos")}
    })
});
}



  return (
    <div style={{ padding: 30,
                  width: "400px",
                  marginRight: "auto",
                  marginLeft: "auto"}}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username" onChange={(event) => setInputValueUser(event.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} onChange={(event) => setInputValuePassword(event.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={getUser}> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;
