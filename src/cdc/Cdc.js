import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "./Cdc.css";
const useStyles = makeStyles({
    card: {
        boxShadow: "",
        borderRadius:"none !important"

    }
});




export default function Boxes() {
    const classes = useStyles();

    const boxes1 = [
        {
            head: "CDC 24/7 ",
            image: "https://www.cdc.gov/homepage/images/cdc-in-action/cdc-24-7-icons-600px.jpg",
            para: "Working 24/7 to protect America from health and safety threats, both foreign and domestic."
        },
        {
            head: "Fellowship &  Internships ",
            image: "https://www.cdc.gov/homepage/images/cdc-in-action/fellowships-720px.jpg",
            para: "CDC has many diverse learning opportunities for students and professionals."
        },
        {
            head: "Ebola Response ",
            image: "https://www.cdc.gov/homepage/images/cdc-in-action/ebola-virus-720px.jpg",
            para: "CDC responds to the current DRC Ebola outbreak."
        },
        {
            head: "Meet Elisabeth",
            image: "https://www.cdc.gov/homepage/images/cdc-in-action/IamCdcBurns-720x405px.jpg",
            para: "Meet people who work 24/7 to defend America from health threats. Check out the newest “I am CDC” video."
        }


    ]

const boxes2 =[
{
   head:"About  CDC" ,
   option:" CDC Vital Signs Report" 
},
{
    head:"CDC Organisation" ,
    option:" CDC  Around the World" 
 },
 {
    head:"Mission,Roles & Pledge " ,
    option:"Lab Safety" 
 },
 {
    head:"Budget & Funding" ,
    option:"Podcasts" 
 },
 {
    head:"David J. Sencer CDC Museum" ,
    option:"Library " 
 },
 {
    head:"Training & Education | Jobs" ,
    option:"Diversity" 
 },



]



    return (
        
        <Grid container lg={12} md={12} sm={12} xs={12}spacing={0} style={{ marginTop: "4%", justifyContent: "center" }}>
            <div style={{ textAlign: "center", fontSize: "38px" }}>CDC in Action</div>
        <Grid container lg={12}md={12} sm={12} xs={12} spacing={12} style={{ marginTop: "3%",marginLeft:"8%" }}>
       
            <Grid item lg={5} md={5} sm={10} xs={10}>
                {boxes1.map(key => (
                    <Card className={classes.card}>
                        < CardContent>
                            <Grid container lg={12} md={12} sm={12} xs={12} spacing={12}>
                                <Grid item lg={5} md={5} sm={10} xs={10} style={{}}>
                                    <img src={key.image} style={{ width: "210px", height: "100px" }}></img>
                                </Grid>
                                <Grid item lg={7} md={7} sm={10} xs={10} style={{ fontSize: "20px", marginTop: "2%", color: "black" }}>
                                    <div>{key.head}</div>
                                    <div style={{ marginTop: "2%" }}>{key.para}</div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>))}
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={10} style={{paddingLeft:"4%"}}>
               
                <div>
                <img src="https://www.cdc.gov/homepage/images/cdc-in-action/about-cdc.jpg" style={{ width: "100%", height: "100%" }}></img>
                </div>
                {boxes2.map(Keys =>(
                    <Card className={classes.card}>
                     <CardContent style={{padding:"18px"}}>
                         <Grid container lg={12} spacing={2}>
                             <Grid item lg={6} style={{}}>
                            <div style={{fontSize:"21px",color:"#075290",textDecoration:"underline"}}>{Keys.head}</div>
                             </Grid>
                             <Grid item lg={6} style={{}}>
                             <div style={{fontSize:"21px",color:"#075290",textDecoration:"underline"}}>{Keys.option}</div>
                             </Grid>
                         </Grid>
                     </CardContent>
                    </Card> 
                ))}
            
            </Grid>
        </Grid>
       
        </Grid>
    
    );
}
