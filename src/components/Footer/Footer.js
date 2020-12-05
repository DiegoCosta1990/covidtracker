import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '3rem'
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        color:'black',
        width: '100%',
        fontFamily:'Quicksand',
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}));

function Footer() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Divider/>
            <Grid container justify="center" alignItems="center" className={classes.footer}>
                <h1>Covid-19 Tracker</h1>
                <h2>Visit more React websites/webapps: <a className={classes.link} href="https://diegocostaportfolio.web.app">Diego Costa Portfolio</a></h2>
            </Grid>
        </div>
    )
}

export default Footer;
