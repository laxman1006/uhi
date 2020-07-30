import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {

        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function Nav() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const button_ = [
        {
            contant1: "Disease & Condition ",
            sub_menu1: [{
                sublist: "ADHD"
            }, {
                sublist: "Cancer"
            }, {
                sublist: "COPD"
            },
            {
                sublist: "Diabetes"
            }, {
                sublist: "Flu (Influenza)"
            }, {
                sublist: "Heart Disease"
            }, {
                sublist: "Sexually Transmitted Diseases (STDs)"
            }, {
                sublist: " Data & Statistics"
            }]
        }]
        const button_1 = [
            {
                contant1: "Healthy Living ",
                sub_menu1: [{
                    sublist: "Adholescent & School Health"
                }, {
                    sublist: "Food Safety"
                }, {
                    sublist: "Healthy Weight"
                },
                {
                    sublist: "Overweight & Obesity"
                }, {
                    sublist: "Smoking and Tobacco Use "
                }, {
                    sublist: "Heart Disease"
                }]
            }]

            const button_2 = [
                {
                    contant1: "Traveller's Health  ",
                    sub_menu1: [{
                        sublist: "ADHD"
                    }, {
                        sublist: "Cancer"
                    }, {
                        sublist: "COPD"
                    },
                    {
                        sublist: "Diabetes"
                    }, {
                        sublist: "Flu (Influenza)"
                    }, {
                        sublist: "Heart Disease"
                    }, {
                        sublist: "Sexually Transmitted Diseases (STDs)"
                    }, {
                        sublist: " Data & Statistics"
                    }]
                }]

                const button_3 = [
                    {
                        contant1: "Emergency Preparedness ",
                        sub_menu1: [{
                            sublist: "ADHD"
                        }, {
                            sublist: "Cancer"
                        }, {
                            sublist: "COPD"
                        },
                        {
                            sublist: "Diabetes"
                        }, {
                            sublist: "Flu (Influenza)"
                        }, {
                            sublist: "Heart Disease"
                        }, {
                            sublist: "Sexually Transmitted Diseases (STDs)"
                        }, {
                            sublist: " Data & Statistics"
                        }]
                    }]

                    const button_4 = [
                        {
                            contant1: "More ",
                            sub_menu1: [{
                                sublist: "ADHD"
                            }, {
                                sublist: "Cancer"
                            }, {
                                sublist: "COPD"
                            },
                            {
                                sublist: "Diabetes"
                            }, {
                                sublist: "Flu (Influenza)"
                            }, {
                                sublist: "Heart Disease"
                            }, {
                                sublist: "Sexually Transmitted Diseases (STDs)"
                            }, {
                                sublist: " Data & Statistics"
                            }]
                        }]
                
    return (
        <Hidden only={['sm', 'xs']}>
            <div style={{ textAlign: "center" }}>

                <Grid container lg={12} spacing={12} style={{ backgroundColor: "#005eaa", marginTop: "18px", borderBottom: "4px solid lightBlue" }}>

                    {button_.map(val => (
                        <Grid item lg={2} md={2} sm={12} xs={12} className="buttonsize">
                            <Button
                                style={{ width: "100%", height: "62px", boxShadow: "none", marginLeft: "10px", textTransform: "none", marginLeft: "50%", border: "none", fontSize: "16px", backgroundColor: "#005eaa" }}
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                {val.contant1}
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {val.sub_menu1.map(val_sub => (
                                    <StyledMenuItem>
                                        {val_sub.sublist}
                                    </StyledMenuItem>
                                ))}
                            </StyledMenu>
                        </Grid>
                    ))}

                    {button_1.map(val => (
                        <Grid item lg={2} md={2} sm={12} xs={12} className="buttonsize">
                            <Button
                                style={{ width: "100%", height: "62px", boxShadow: "none", marginLeft: "10px", textTransform: "none", marginLeft: "50%", border: "none", fontSize: "16px", backgroundColor: "#005eaa" }}
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                {val.contant1}
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {val.sub_menu1.map(val_sub => (
                                    <StyledMenuItem>
                                        {val_sub.sublist}
                                    </StyledMenuItem>
                                ))}
                            </StyledMenu>
                        </Grid>
                    ))}

                    {button_2.map(val => (
                        <Grid item lg={2} md={2} sm={12} xs={12} className="buttonsize">
                            <Button
                                style={{ width: "100%", height: "62px", boxShadow: "none", marginLeft: "10px", textTransform: "none", marginLeft: "50%", border: "none", fontSize: "16px", backgroundColor: "#005eaa" }}
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                {val.contant1}
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >ddddddddddddddddddd
                                {val.sub_menu1.map(val_sub => (
                                    <StyledMenuItem>
                                        {val_sub.sublist}
                                    </StyledMenuItem>
                                ))}
                            </StyledMenu>
                        </Grid>
                    ))}
                    {button_3.map(val => (
                        <Grid item lg={2} md={2} sm={12} xs={12} className="buttonsize">
                            <Button
                                style={{ width: "100%", height: "62px", boxShadow: "none", marginLeft: "10px", textTransform: "none", marginLeft: "50%", border: "none", fontSize: "16px", backgroundColor: "#005eaa" }}
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                {val.contant1}
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {val.sub_menu1.map(val_sub => (
                                    <StyledMenuItem>
                                        {val_sub.sublist}
                                    </StyledMenuItem>
                                ))}
                            </StyledMenu>
                        </Grid>
                    ))}
                    {button_4.map(val => (
                        <Grid item lg={2} md={2} sm={12} xs={12} className="buttonsize">
                            <Button
                                style={{ width: "100%", height: "62px", boxShadow: "none", marginLeft: "10px", textTransform: "none", marginLeft: "50%", border: "none", fontSize: "16px", backgroundColor: "#005eaa" }}
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                {val.contant1}
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {val.sub_menu1.map(val_sub => (
                                    <StyledMenuItem>
                                        {val_sub.sublist}
                                    </StyledMenuItem>
                                ))}
                            </StyledMenu>
                        </Grid>
                    ))}

                </Grid>
            </div>
        </Hidden>
    );
}
