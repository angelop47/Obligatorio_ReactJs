
import React from "react";
import "./Css/NewSite.css";
import { useState } from "react";

function NewSite(){

  var cookieValor = document.cookie

  let [inputValueName, setInputValueName] = useState("")
  let [inputValueType, setInputValueType] = useState("")
  let [inputValueCity, setInputValueCity] = useState("")
  let [inputValueDescripcion, setInputValueDescripcion] = useState("")
  let [inputValueHistoria, setInputValueHistoria] = useState("")
  let [inputValueImagenUrl, setInputValueImagenUrl] = useState("")
  let [ValueUserImage, setValueUserImage] = useState("")


  
  getUser();
  function getUser(){
    return fetch('http://localhost:777/users?id=' + cookieValor)
    .then(response => response.json())
    .then(data => { 
      data.forEach(users => {
          return setValueUserImage(users.imagen)
      })
  });
  }

  function newSite(){
    if(cookieValor === ''){
      alert('Inicie Sesion')
    }
    else if( inputValueType        === '',
        inputValueCity        === '',
        inputValueDescripcion === '',
        inputValueHistoria === '' ,
        inputValueImagenUrl === ''  
        )
        {
          alert("faltanDatos")
      }
      else{
    console.log("funciona");
    var url = 'http://localhost:777/sites';
    var data = {id: '',
                name: inputValueName,
                type: inputValueType,
                city: inputValueCity,
                description: inputValueDescripcion,
                historia: inputValueHistoria,
                userId: cookieValor,
                userImage: ValueUserImage,
                imagen: inputValueImagenUrl}
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
    <div class="form-container">
      <form class="register-form">
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(event) => setInputValueName(event.target.value)}
        />
        <input
          id="type"
          class="form-field"
          type="text"
          placeholder="Type"
          name="type"
          onChange={(event) => setInputValueType(event.target.value)}
        />
        <input
          id="City"
          class="form-field"
          type="text"
          placeholder="City"
          name="City"
          onChange={(event) => setInputValueCity(event.target.value)}
        />
        <input
          id="Descripcion"
          class="form-field"
          type="text"
          placeholder="Description"
          name="description"
          onChange={(event) => setInputValueDescripcion(event.target.value)}
        />
        <input
          id="historia"
          class="form-field"
          type="text"
          placeholder="Historia"
          name="historia"
          onChange={(event) => setInputValueHistoria(event.target.value)}
        />
        <input
          id="imagenUrl"
          class="form-field"
          type="text"
          placeholder="Imagen Url"
          name="imagenUrl"
          onChange={(event) => setInputValueImagenUrl(event.target.value)}
        />
        <button class="form-field" id="button" onClick={newSite}>
          Agregar Sitio
        </button>
      </form>
    </div>
  )
}

export { NewSite }