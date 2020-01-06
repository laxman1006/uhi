import React from "react";
import { Grid } from "@material-ui/core";
import "./style.css";

function Footer() {
  return (
    <div style={{ width: "100%", paddingBottom:'20px' }}>
      <Grid container lg={12} style={{  backgroundColor:'#333',}}>
        <Grid
          container
          direction="column"
          lg={3}
          style={{
          
            padding: "10px 0px 0px 20px",
            color: "#fff"
            // paddingLeft : '20px',
          }}
        >
          <p style={{}}>
            <strong>HAVE QUESTIONS?</strong>
          </p>

          <a
            href="https://www.cdc.gov/cdc-info/index.html"
            className="linkStyle"
          >
            <i class="fas fa-tv"></i> &nbsp; Visit CDC-INFO
          </a>

          <p>
            <i class="fas fa-phone-square-alt"></i>Call 800-232-4636
          </p>

          <a
            href="mailto:https://wwwn.cdc.gov/dcs/contactus/form"
            className="linkStyle"
          >
            <i class="fas fa-envelope"></i> &nbsp; Email CDC-INFO
          </a>
        </Grid>
        <Grid
          container
          direction="column"
          lg={3}
          style={{
            padding: "10px 0px 0px 20px",
            color: "#fff"
            // paddingLeft : '20px',
          }}
        >
          <p>
            <strong>CDC INFORMATION</strong>
          </p>

          <a
            href="https://www.cdc.gov/about/default.html"
            className="linkStyle"
          >
            About CDC
          </a>

          <a href="https://jobs.cdc.gov/" className="linkStyle">
            Jobs
          </a>

          <a href="https://www.cdc.gov/funding" className="linkStyle">
            Funding
          </a>

          <a
            href="https://www.cdc.gov/Other/policies.html"
            className="linkStyle"
          >
            Policies
          </a>

          <a
            href="https://www.cdc.gov/other/plugins/index.html"
            className="linkStyle"
          >
            File Viewers & Players
          </a>
        </Grid>
        <Grid
          container
          direction="column"
          lg={3}
          style={{
            padding: "20px 0px 0px 20px"
          }}
        >
          <a
            href="https://www.cdc.gov/other/privacy.html"
            className="linkStyle"
          >
            Privacy
          </a>

          <a href="https://www.cdc.gov/od/foia" className="linkStyle">
            FOIA
          </a>

          <a
            href="https://www.cdc.gov/eeo/nofearact/index.html "
            className="linkStyle"
          >
            No Fear Act
          </a>

          <a href="https://oig.hhs.gov/" className="linkStyle">
            OIG
          </a>

          <a
            href="https://www.cdc.gov/other/nondiscrimination.html"
            className="linkStyle"
          >
            Nondiscrimination
          </a>

          <a
            href="https://www.cdc.gov/contact/accessibility.html"
            className="linkStyle"
          >
            Accessibility
          </a>
        </Grid>
        <Grid
          container
          direction="column"
          lg={3}
          style={{
            padding: "10px 0px 0px 20px",

            // paddingLeft : '20px',
            color: "#fff"
          }}
        >
          <p>
            {" "}
            <strong>CONNECT WITH CDC</strong>
          </p>

          <a
            href="https://www.cdc.gov/other/privacy.html"
            className="linkStyle"
          >
            Privacy
          </a>

          <a href="https://www.cdc.gov/od/foia" className="linkStyle">
            FOIA
          </a>

          <a
            href="https://www.cdc.gov/eeo/nofearact/index.html "
            className="linkStyle"
          >
            No Fear Act
          </a>

          <a href="https://oig.hhs.gov/" className="linkStyle">
            OIG
          </a>

          <a
            href="https://www.cdc.gov/other/nondiscrimination.html"
            className="linkStyle"
          >
            Nondiscrimination
          </a>

          <a
            href="https://www.cdc.gov/contact/accessibility.html"
            className="linkStyle"
          >
            Accessibility
          </a>
        </Grid>
      </Grid>

    </div>
  );
}

export default Footer;
