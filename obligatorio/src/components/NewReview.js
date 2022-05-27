import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState } from "react";
import { useParams } from "react-router-dom";

function NewReview() {

  var cookieValor = document.cookie
  let { id } = useParams();
  const [value, setValue] = React.useState(2);
  let [inputValueRating, setInputValueRating] = useState("")

  function newReview(){
    if(cookieValor === ''){
      alert('Inicio Sesion')
    }
    else if(inputValueRating === '')
        {
          alert("faltan Datos")
      }
      else{
    console.log("funciona");
    var url = 'http://localhost:777/reviews';
    var data = {id: '',
                siteId: id,
                userId: cookieValor,
                rating: value,
                comment: inputValueRating,
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

  return (
    <Box style={{
      margin: "40px",
      marginLeft: "auto",
      marginRight: "auto",
      display: 'flex',
      alignItems: 'center',
      width: "90%",
      height: "40px",
      borderRadius: "20px",
      backgroundColor: "white"
      }}
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <input class="form-field"
              style={{
                height: "5px",
                borderRadius: "20px"}}
              type="text"
              placeholder="Review"
              name="Review"
              onChange={(event) => setInputValueRating(event.target.value)}>
      </input>
      <button class="" 
              id="button"
              style={{
                height: "35px",
                width: "60px",
                borderRadius: "20px",
                border: "0"
              }}
              onClick={newReview}>
          Enviar
      </button>
    </Box>
  );
  
}

export { NewReview }