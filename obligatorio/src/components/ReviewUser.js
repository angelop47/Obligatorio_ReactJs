import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import { NewReview } from './NewReview';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReviewUser() {
  /* const labels = {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
  };*/
    let { id } = useParams(); 
  
    var direccion = 'http://localhost:777/reviews?userId=';
    function getReviewsById(){
    return fetch(direccion + id)
    .then(response => response.json())
    }
  
  //obtener reviews
  const [reviews, setReviews] = useState([])
      useEffect(() => {
      getReviews()
  },)
  
  function getReviews(){
    getReviewsById()
    .then(response => {
      setReviews(response)
    })
  }
  
      return (
        <>{
          reviews.map(review => {
            const value = review.rating;
            return(
      <div>
      <Box
        className='box-rating'
        style={{
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
      
      >
      
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
  
        <Typography variant="body2" style={{marginLeft: "20px"}} color="text.secondary">
          { review.comment }
        </Typography>
      </Box>
      </div>
            )
          })
        }
        </>
      );
    }
  
  export { ReviewUser }