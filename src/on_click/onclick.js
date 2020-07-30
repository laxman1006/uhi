import Grid from '@material-ui/core/Grid';
import Header from '../on_header/header';
import Sidebar from '../on_sidebar/sidebar';
import Footer from '../on_footer/footer';
import End from '../on_footer/End.js';
import React from 'react'

function on_click() {
return (
<>
<div>
      <Grid lg={12}>
        <Grid item lg={12}>
          <Header/>
        </Grid>
      </Grid>
      <Grid lg={12} style={{ backgroundColor: "#f5f5f5" }}>
        <Grid
          container
          direction="row"
          xs={10}
          style={{
            margin: "auto"
          }}
        >
          <Sidebar />
        </Grid>
      </Grid>
      <Grid lg={12} style={{ backgroundColor: "#333" ,}}>
        <Grid
          container
          direction="row"
          xs={10}
          style={{
            margin: "auto",
            
          }}
        >
          <Footer />
        </Grid>
        <Grid lg={12 }style={{backgroundColor:'#fff'}}>
        <Grid
          container
          direction="row"
          xs={10}
          style={{
            margin: "auto"
          }}
        >
         <End/>
        </Grid>
      </Grid>
      </Grid>
    </div>
</>
);
        }
        export default on_click; 
