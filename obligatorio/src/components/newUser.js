import React from "react";
import "./Css/NewSite.css";
import {  useState } from "react";
import Typography from '@mui/material/Typography';

function NewUser(){

  let [inputValueUser, setInputValueUser] = useState("")
  let [inputValuePais, setInputValuePais] = useState("")
  let [inputValueCiudad, setInputValueCiudad] = useState("")
  let [inputValuePassword, setInputValuePassword] = useState("")
  let [inputValueImagen, setInputValueImagen] = useState("")

  function newUser(){
    if(inputValueUser === '',
        inputValuePais        === '',
        inputValueCiudad        === '',
        inputValuePassword === '',
        inputValueImagen === '')
        {
          console.log("faltanDatos")
      }
      else{
    console.log("funciona");
    var url = 'http://localhost:777/users';
    var data = {id: '',
                user: inputValueUser,
                pais: inputValuePais,
                ciudad: inputValueCiudad,
                password: inputValuePassword,
                imagen: inputValueImagen,
      }
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
      }
    }


  return(
    <div class="form-container" style={{martinTop: '200px'}}>
    <Typography paragraph>Por si aun no tienes ususario</Typography>
      <form class="register-form">
        <input
          id="User"
          class="form-field"
          type="text"
          placeholder="Name"
          name="User"
          onChange={(event) => setInputValueUser(event.target.value)}
        />
        <input
          id="type"
          class="form-field"
          type="text"
          placeholder="Pais"
          name="Pais"
          onChange={(event) => setInputValuePais(event.target.value)}
        />
        <input
          id="City"
          class="form-field"
          type="text"
          placeholder="Ciudad"
          name="Ciudad"
          onChange={(event) => setInputValueCiudad(event.target.value)}
        />
        <input
          id="Descripcion"
          class="form-field"
          type="text"
          placeholder="Password"
          name="Password"
          onChange={(event) => setInputValuePassword(event.target.value)}
        />
        <input
          id="Descripcion"
          class="form-field"
          type="text"
          placeholder="Imagen Url"
          name="Imagen"
          onChange={(event) => setInputValueImagen(event.target.value)}
        />   
          <button class="form-field" id="button" onClick={newUser}>
          Agregar Usuario
        </button>
      </form>
    </div>
  )
}

export { NewUser }