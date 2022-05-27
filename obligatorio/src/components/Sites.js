import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@material-ui/core';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NewSite } from "./NewSite";
import { getAllSites} from "../utils";
import { Filtrar } from './Filtrar'

import "../App.css"
import "./Css/Sites.css" ;
function Sites() {

	const [filter, setFilter] = useState('')

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
      return <IconButton {...other} />;
        })(({ theme, expand }) => ({
          transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
    }),
  }));
  
//export default function RecipeReviewCard() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
};

//obtener sitios
const [sites, setSites] = useState([])
    useEffect(() => {
    getSites()
}, [])

function getSites(){
  getAllSites()
  .then(response => {
    setSites(response)
  })
}


const sitesFiltrados = sites.filter((site) =>
		site.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	)

    return (
      <>
      <Filtrar filter={filter} setFilter={setFilter} />
      {
        sitesFiltrados.length > 0 ? (
					sitesFiltrados.map((site) => (
            <Card className='card-site' style={{ 
                          margin: "40px",
                          marginLeft: "auto",
                          marginRight: "auto", 
                          }}>
                
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <CardMedia
                      component="img"
                      src={site.userImage}
                      />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={site.name}
                  subheader={site.city}
                />
                <CardMedia
                  component="img"
                  src={site.imagen}
                  alt={site.name}
                />
                <CardContent>
                  <Typography paragraph>Descripcion:</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {site.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <NavLink
                    exact
                    to={'/paginaSite/'+site.id}
                    activeClassName="active"
                    className="nav-links">
                    <Button >
                      Mas Info
                    </Button>
                  </NavLink>                  
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Historia:</Typography>
                    <Typography paragraph>
                      {site.historia}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            
              ))
				) : (
					<h5>
						No se encontro ningun Sitio con la busqueda{' '}
						<strong>"{filter}"</strong>.
					</h5>
				)}
        <NewSite></NewSite>
      </>
    );
  }


export { Sites };

