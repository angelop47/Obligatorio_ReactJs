import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from "react";

import "./Css/Site.css";
function NewItinerary() {

  var cookieValor = document.cookie;
  let [ValueItiniraryName, setValueItiniraryName] = useState("")
  let [ValueItiniraryDescription, setValueItiniraryDescription] = useState("")

  function newItinerary(){
    if( ValueItiniraryName === '',
        ValueItiniraryDescription === '' 
        )
        {
          console.log("faltanDatos")
      }
      else{
    console.log("funciona");
    var url = 'http://localhost:777/itinerary';
    var data = {id: '',
                name: ValueItiniraryName,
                siteId: '',
                userId: cookieValor,
                description: ValueItiniraryDescription}
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
      
            <Card className='card-site' style={{ 
                          margin: "40px",
                          marginLeft: "auto",
                          marginRight: "auto", 
                          }}>
                <Typography variant="h5">
                  <input
                    id="first-name"
                    class="form-field"
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={(event) => setValueItiniraryName(event.target.value)}/>
                </Typography>
                
                <CardContent>
                  <Typography paragraph>
                  <input
                    id="first-name"
                    class="form-field"
                    type="text"
                    placeholder="Description"
                    name="Description"
                    onChange={(event) => setValueItiniraryDescription(event.target.value)}/>
                  </Typography>
                  <button class="form-field" id="button" onClick={newItinerary}>
                    Agregar Itinerario
                  </button>
                </CardContent>       
              </Card>        
              )
}



export { NewItinerary }

