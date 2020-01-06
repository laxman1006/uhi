import React from 'react';
import ReactDOM from 'react-dom'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Nav from  '../navbar/Nav';
import Cards from '../card/Cards';
import Boxes from '../box/Boxes';
import Cdc from '../cdc/Cdc';
import Science from '../science/Science';

const preventDefault = event => event.preventDefault();


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
   
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border:"1px solid #ccc",
    backgroundColor: 'fade(theme.palette.common.white, 0.15)',
    '&:hover': {
      backgroundColor: "fade(theme.palette.common.white, 0.25)",
    },

    searchIcon: {
      width: theme.spacing(4),
      height: '100%',
      position: 'relative',
      pointerEvents: 'none',
     textAlign: 'center',
      marginTop:'2px',
    },

    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 10,
        '&:focus': {
          width: 200,
        },
  
  paper: {
    padding: theme.spacing(0.4),
    textAlign: 'center',
    
  },
},
}
}}));
export default function Header() {
  const classes = useStyles();
  
  const [currency, setCurrency] = React.useState();

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return (
   
    <div>
      <Grid container lg={12} md={12} spacing={12}>
        <Grid item lg={10} xs={12}  md={9} xl={10} style={{backgroundColor:"hsl(0, 0%, 95%)"}} >
        
            </Grid>
            <Grid item lg={2}  sm={12} xs={12} md={12} xl={12}  style={{backgroundColor:"hsl(0, 0%, 95%)"}} >
            <Typography className={ `espanol ${classes.root}`} >
          <Link href="#" onClick={preventDefault} >
            Espanol
            </Link>
            
          &nbsp;|&nbsp; 
          <Link href="#" onClick={preventDefault} variant="body1">
            {'Other Languages'}
          </Link>
        </Typography>
        </Grid>
      </Grid>
     

      <Grid container lg={12} spacing={12} ClassName="">
      <Grid item lg={8} xs={12} md={8} sm={12} xl={2} >
        <img src="/headlogo.svg" className="headlogo"></img>
       </Grid>
        <Grid item lg={3} xs={12} md={5} xl={4} className="rightside" >
        <Typography className="a-zindex"> 
          <Link href="#" onClick={preventDefault} variant="body1">
            {'A-Z Index'}
          </Link>
        </Typography>
      
        <div className={classes.search}className="searchbox">
        <InputBase  className="search"
              placeholder="Search" style={{marginLeft:"10%",marginTop: "4px",fontSize: "19px"}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              
            />
        <div className="search_icon_back">
        <SearchIcon className="search_icon"/> </div> 
       
          </div>
        </Grid>
        </Grid>

<Grid container lg={12}  md={12} xl={12} sm={12} xs={12}spacing={12} ClassName="">
<Grid item lg={12} xs={12} md={8} xl={2} >

<Nav/>
    </Grid>
   
    <Grid container lg={12}  md={12} xl={12} sm={12} xs={12}spacing={12} ClassName="image_tune" style={{backgroundColor:"hsl(0, 0%, 95%)"}}>
    
      <img src="lungs injury.jpg" className="image_tune"style={{marginLeft:"7%"}}></img> 
        
      </Grid>
         <Cards/>
         <Boxes/>
         <Cdc/>
         <Science/>
       
    </Grid>
</div>
  );








            }
