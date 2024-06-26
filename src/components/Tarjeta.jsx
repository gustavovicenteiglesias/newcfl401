import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Tarjeta({foto,title,titulo,texto}) {
  return (
    <div className='Banner-Novedades'>
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        
        sx={{height:"500px" }}
        image={foto}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {texto}
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
  </CardActions>*/}
    </Card>
    </div>
  );
}