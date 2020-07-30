import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import './Science.css';

const useStyles = makeStyles({
    card: {
        maxWidth: 300
    },
    cards: {
        maxWidth: 300,
        borderRadius: 0,
        color: "#075290"
    }
});

export default function Science() {
    const classes = useStyles();

    const science = [
        {
            head: "Morbidity and Mortality Weekly  in our work",
            image: "https://www.cdc.gov/homepage/images/science/mmwr.png"
        },


        {
            head: "Emerging Infectious Diseases in world",
            image: "https://www.cdc.gov/homepage/images/science/eid.png"

        },
        {
            head: "Preventing Chronic Disease to cure people",
            image: "https://www.cdc.gov/homepage/images/science/pcd.png"
        },

    ]

    const science2 = [
        {
            head: "Data & Statistics"
        },
        {
            head: "Science Clips"
        },
        {
            head: "Public Health Image Library"
        },
        {
            head: "CDC Stacks:Publications"
        },
        {
            head: "Advancing Excellence & Integrity  "
        }

    ]


    return (
        <Grid container lg={12} spacing={12} className="sciencehead" style={{ paddingLeft: "3%", justifyContent: "center",backgroundColor:"hsl(0, 0%, 95%)", paddingTop: "2%" }}>
            <div style={{ fontSize: "35px", textAlign: "center !important", justifyContent: "center" }}>  Science at CDC</div>
             
            <Grid container lg={12} spacing={12} style={{ marginBottom:"4%",marginTop:"2%"  }}>
                {science.map(value => (
                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12}spacing={12}  styles={{ height: "200px",marginTop:"5% !important",marginBottom:"4%" }}>
                        <Card className={`sciencedata ${classes.card}`}>
                            <>
                                <CardMedia
                                    component="img"
                                    alt=""
                                    height="100%"
                                    width="100%"
                                    marginBottom="4%"
                                    image={value.image}
                                />
                                <CardContent>
                                    <Typography>
                                        <div style={{ fontSize: "18px" }}> {value.head}</div>
                                    </Typography>
                                </CardContent>
                            </>
                        </Card>
                    </Grid>
                ))}
                <Grid item xl={3} lg={3} md={5} sm={12} xs={12} className="sciencedata2" styles={{ borderRadius: "none" }}>
                    {science2.map(values => (
                        <Card className={classes.cards}>
                            <>
                                <CardActionArea>
                                    <CardContent style={{ borderRadius: "none !important" }} >
                                        <div style={{ fontSize: "18px", borderRadius: "none !important" }}> {values.head}</div>
                                    </CardContent>
                                </CardActionArea>
                            </>
                        </Card>
                    ))}
                </Grid>
            </Grid>
            
        </Grid>
    );
}
