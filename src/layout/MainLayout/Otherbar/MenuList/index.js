import React from 'react';

// material-ui
import { makeStyles, withStyles } from '@material-ui/styles';
import { Card, Grid, LinearProgress, Typography } from '@material-ui/core';
import SubCard from 'ui-component/cards/SubCard';

import { IconUsers } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        // background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
        marginTop: '1rem',
        marginBottom: '22px',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '150px',
            height: '150px',
            background:
                theme.palette.mode === 'dark'
                    ? `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
                    : theme.palette.secondary[200],
            borderRadius: '50%',
            top: '-15px',
            right: '-95px',
            [theme.breakpoints.down('xs')]: {
                top: '-105px',
                right: '-140px'
            }
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '150px',
            height: '150px',
            background:
                theme.palette.mode === 'dark'
                    ? `linear-gradient(140.9deg, ${theme.palette.secondary.dark} -14.02%, rgba(144, 202, 249, 0) 85.50%)`
                    : theme.palette.secondary[200],
            borderRadius: '50%',
            top: '-115px',
            right: '-15px',
            opacity: 0.5,
            [theme.breakpoints.down('xs')]: {
                top: '-155px',
                right: '-70px'
            }
        }
    },
    back: {
        background: theme.palette.primary.light,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
    },
    listPrimary: {
        color: theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.primary[800],
        width: '2rem',
        height: '2rem',
        marginLeft: '1rem'
    },
    box: {
        color: theme.palette.primary[800],
        padding: '1rem'
    },
    p: {
        margin: '0.4rem 0rem 0rem 0rem',
        fontSize: '0.8em'
    },
    b: {
        fontSize: '1rem'
    }
}));

// progress bar style
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 30
    },
    colorPrimary: {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.light : '#fff'
    },
    bar: {
        borderRadius: 30,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
    }
}))(LinearProgress);

// ===========================|| SIDEBAR MENU LIST ||=========================== //

const MenuList = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.card}>
            <Card className={classes.back}>
                <IconUsers className={classes.listPrimary} />
                <div className={classes.box}>
                    <b className={classes.b}>7</b>
                    <p className={classes.p}>Candidatures</p>
                </div>
            </Card>
        </Grid>
    );
};

export default MenuList;
