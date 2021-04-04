import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

//MUI
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Hidden, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InputIcon from "@material-ui/icons/Input";


const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: "none",
        backgroundColor: theme.palette.black
    },
    flexGrow: {
        flexGrow: 1,
    },
    signOutButton: {
        marginLeft: theme.spacing(1),
    },
}));

const Topbar = (props) => {
    const { onSidebarOpen } = props;

    const classes = useStyles();

    const handleSignout = (event) => {

        event.preventDefault();

        // userActions.logout();

        // window.location.replace('/sign-in');
    }

    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <RouterLink style={{ textDecoration:'none', color:'inherit' }} to="/">
                    <Typography variant="h1" color='primary'>Movies</Typography>
                </RouterLink>
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    <IconButton className={classes.signOutButton} onClick={handleSignout} color="primary">
                        <InputIcon />
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                <IconButton color="inherit" onClick={onSidebarOpen}>
                    <MenuIcon />
                </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
    onSidebarOpen: PropTypes.func,
};

export default Topbar;
