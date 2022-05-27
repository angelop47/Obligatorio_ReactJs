import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { NewItinerary } from "./NewItinerary"
import "./Css/Site.css";
function Itinerary() {

  
//export default function RecipeReviewCard() {

  
  var cookieValor = document.cookie

// eslint-disable-next-line react-hooks/rules-of-hooks
var direccion = 'http://localhost:777/itinerary?userId=';
function getitinerarysById(){
return fetch(direccion + cookieValor)
.then(response => response.json())
}

//obtener sitios
// eslint-disable-next-line react-hooks/rules-of-hooks
const [itinerarys, setItinerarys] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      getItinerarys()
})

function getItinerarys(){
  getitinerarysById()
  .then(response => {
    setItinerarys(response)
  })
}

    return (
      <>{
        itinerarys.map(itinerary => {
          return(       
            <Card className='card-site' style={{ 
                          margin: "40px",
                          marginLeft: "auto",
                          marginRight: "auto", 
                          }}>
                <Typography variant="h5">{itinerary.name}</Typography>
                
                <CardContent>
                  <Typography paragraph>{itinerary.description}</Typography>
                  
                </CardContent>       
              </Card>        
          )
        })
        }
        <NewItinerary></NewItinerary>
      </>
    );
  }


export { Itinerary }

