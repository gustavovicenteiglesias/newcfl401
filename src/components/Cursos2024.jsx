import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import banner from "../assest/imagenes/banner2024.jpg"


export default function MediaCard() {
  return (
    <div className='Banner-Novedades'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 500,width:350 }}
        image={banner}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small" href='https://cursosipfl.trabajo.gba.gov.ar/login' target='_blank'>Ir a inscripción</Button>
        
      </CardActions>*/}
    </Card>
    </div>
  );
}