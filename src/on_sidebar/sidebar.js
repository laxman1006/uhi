import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Body from "../on_body/body";
import "./style.css";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        id="sideBar"
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <List style={{ padding: "0px 15px" }}>
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/facts.html"
          >
            {" "}
            <i class="fas fa-home"></i> &nbsp; What is ADHD{" "}
          </Button>{" "}
          <hr className="hr" />
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/diagnosis.html"
          >
            Symptoms and Diagnosis
          </Button>{" "}
          <hr className="hr" />
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/treatment.html"
          >
            Treatment{" "}
          </Button>{" "}
          <hr className="hr" />
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/conditions.html"
          >
            Other Concern And Conditions
          </Button>{" "}
          <hr className="hr" />
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/data.html"
          >
            Data and Statics
          </Button>{" "}
          <hr className="hr" />
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/state-data-hub.html"
          >
            State Information
          </Button>{" "}
          <hr className="hr" />
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/research.html"
          >
            Research
          </Button>{" "}
          <hr className="hr" />
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/focus-for-the-future.html"
          >
            Focus for the Future Initiative
          </Button>{" "}
          <hr className="hr" />
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/pubs.html"
          >
            Articles And Key Findings
          </Button>{" "}
          <hr className="hr" />
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/materials-multimedia/index.html"
          >
            Materials and Multimedia
          </Button>{" "}
          <hr className="hr" />
          <Button
            className="buttonStyle"
            href="https://www.cdc.gov/ncbddd/adhd/links.html"
          >
            Links to Other Resources
          </Button>{" "}
          <hr className="hr" />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Body />
      </main>
    </div>
  );
}
