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
import"./Boxes.css"; 
const useStyles = makeStyles({
    card: {
        boxShadow: "none",
        borderTop: " 1px solid lightgrey",
        borderLeft: "5px solid lightgreen",
        borderRadius: "0px",
        width: "90%",
        borderRight: "1px solid lightgrey",
        MozBorderRadiusBottomright: "10px",
        borderBotton: " 1px solid lightgrey",
        marginLeft:"5%"

    }
});




export default function Boxes() {
    const classes = useStyles();

    const box1 = [
        {
            head: "Pet Store Puppies – Multidrug-resistant ",
            image: "https://www.cdc.gov/homepage/images/outbreaks-secondary.png"
        },
        {
            head: "Fresh Express Salad Kits –  ",
            image: "https://www.cdc.gov/homepage/images/outbreaks-secondary.png"
        },
        {
            head: "Romaine lettuce – E.coli Infections ",
            image: "https://www.cdc.gov/homepage/images/outbreaks-secondary.png"
        },
        {
            head: "Turtles - salmonella Infections ",
            image: "https://www.cdc.gov/homepage/images/outbreaks-secondary.png"
        },


    ]
    const box2 = [
        {
            head: "Transcript of December 20, 2019, Telebriefing: Update on Lung Injury Associated with E-cigarette Use, or Vaping",
            image: ""
        },
        {
            head: "New Cases in Outbreak of E-cigarette, or Vaping, Product Use-Associated Lung Injury (EVALI) On the Decline ",
            image: ""
        },
        {
            head: "CDC Releases First National Estimates on Diabetes within Hispanic and Asian Populations in the US ",
            image: ""
        },


    ]


    return (
        
            <Grid container lg={12} spacing={12} style={{ marginTop: "6%" }}>
            

                <Grid item lg={6} md={6} sm={12} xs={12} className="box_mov">
            
                    <div className={classes.card} style={{ borderTop: "1px lightgrey", borderTop: "1px solid lightgrey", paddingTop: "2%", paddingBottom: "1%" }}><span style={{ fontSize: "26px", marginLeft: "4%" }}>Outbreak</span></div>
                    {box1.map(key => (
                        <Card className={classes.card}>
                            < CardContent>
                                <Grid container lg={12}sm={12} xs={12}   spacing={12}>
                                    <Grid item lg={2}sm={2} xs={2}  style={{}}>
                                        <img src={key.image}></img>
                                    </Grid>
                                    <Grid item lg={10}sm={12} xs={12}  style={{ fontSize: "20px", marginTop: "2%", color: "#075290" }}>
                                    <div  className="box1font"onClick={()=>window.location.reload()} className="onhover">{key.head}</div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>))}
                        <Grid container lg={12} spacing={12} >
                <Grid item lg={10} md={6} sm={12} xs={12}>
                    <a>
                        <Button variant="contained" className="button1"   href={("https://vibrant-einstein-48f2e3.netlify.com/")} style={{float:"right",backgroundColor:"#4b830d",color:"white", width:"220px",fontWeight:"bold",textTransform:"none",fontSize:"18px"}}>
                            More Outbreaks
</Button>
</a>

</Grid>
                    </Grid>
                
                </Grid>
               
                <Grid item lg={6} md={6} sm={12} xs={12}>
                
                    <div className={ `card2 ${classes.card}`} style={{ borderTop: "1px lightgrey", borderTop: "1px solid lightgrey", paddingTop: "2%", paddingBottom: "1%", MozBorderRadiusTopright: "8%" }}> <span style={{ fontSize: "26px", marginLeft: "4%", }}>News</span></div>


                    {box2.map(key1 => (
                        <Card className={classes.card}>
                            < CardContent>
                                <Grid container lg={12} md={12} sm={12} xs={12} spacing={12} >
                                    <Grid item lg={1} md={1} sm={3} xs={3}>
                                        <div style={{ border: "1px solid #ccc", width: "90%" }}>
                                            <div style={{ width: "100%", height: "28px", background: "#00695c", color: "white", textAlign: "center", fontWeight: "bold" }}>DEC</div>
                                            <div style={{ width: "100%", height: "26px", background: "white", color: "#00695c", textAlign: "center", fontWeight: "bold" }}>20</div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={11}md={11} sm={9} xs={9} style={{ fontSize: "20px", height: "", color: "#075290",cursor:"pointer" }} >
                                      <div className="box1font" onClick={()=>window.location.reload()} className="onhover">{key1.head}</div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>))}
                    <Grid container lg={12} spacing={12} >
                     
                     <Button variant="contained" className="button2"  href={("https://vibrant-einstein-48f2e3.netlify.com/")}  style={{ marginTop:"84px",marginLeft:"65%",backgroundColor:"#007c91",color:"white",fontWeight:"bold",textTransform:"none",fontSize:"18px"}}>
                            More News
                           
</Button>

                    </Grid>
            
                </Grid>
                
            </Grid>
        


    );
}