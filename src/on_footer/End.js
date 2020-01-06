import React from "react";
import './EndStyle.css';
import { Grid } from "@material-ui/core/";
import { withRouter } from 'react-router-dom'

function End() {
  return (
    <div style={{ width: "100%",
    padding:'10px 0px 30px 0px' }}>
      <Grid container lg={12}>
        <Grid container direction="column" lg={4} style={{textAlign:"center",}}>
         <a href='https://www.hhs.gov/' className='endLink' >U.S. Department of Health & Human Services</a>
        </Grid>{" "}
        <Grid container direction="column" lg={4}style={{textAlign:"center",}}>
        <a href='https://www.usa.gov/' className='endLink' >
USA.gov</a>
        </Grid>{" "}
        <Grid container direction="column" lg={4} style={{textAlign:"center",}}>
        <a href='https://www.cdc.gov/Other/disclaimer.html' className='endLink' >
CDC Website Exit Disclaimer </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(End);
