import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import  './Card.css';


const useStyles = makeStyles({
  card: {
    maxWidth: 400
  }
});

export default function Cards() {
  const classes = useStyles();

  const cardo_ = [
    {
      head: "Ebola Responder Stories",
      sub_title:
      {
        para: "Find out about what our Ebola responders are doing as they tell you their stories",
        image: "https://www.cdc.gov/homepage/images/cards/gome-patrick2.png"
      }
    },

    {
      head: "Prevent Flu",
      sub_title:
      {
        para: "It’s not too late to get a flu vaccine if you have not already we were in the manage dermize!",
        image: "https://www.cdc.gov/homepage/images/cards/flu-vaccine-facts720px.jpg"
      }
    },
    {
      head: "Dealing with Stress",
      sub_title:
      {
        para: "Learn the symptoms of stress and follow these self-care tips to help manage stress.",
        image: "https://www.cdc.gov/homepage/images/cards/stressed-720px.jpg"
      }
    }
  ]
  return (
     <Container-fluid>
    <Grid container lg={12} spacing={10} className="cardfu"  style={{marginTop: "3%",
    marginLeft: "5%"}}>
       
        {cardo_.map(val => (
          <>
<Grid item lg={4} md={4} sm={10} xs={10} className="cardfun">
    <Card className={ classes.card}>
      <CardActionArea >
            <CardMedia
              component="img"
              alt=""
              height="210"
              image={val.sub_title.image}
              
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {val.head}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:"17px"}}>
                {val.sub_title.para}
              </Typography>
            </CardContent>
            </CardActionArea>
    </Card>
    </Grid>
          </>
        ))}
     
    </Grid>
    </Container-fluid>
  );
}
