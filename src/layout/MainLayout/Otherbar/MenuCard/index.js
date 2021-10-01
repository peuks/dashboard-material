import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles, withStyles } from '@material-ui/styles';
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@material-ui/core';

// assets
import { IconPhone, IconMail } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
        marginBottom: '22px',
        overflow: 'hidden',
        position: 'relative'
    },
    listPrimary: {
        color: theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.primary[800]
    },
    menuAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        color: theme.palette.primary.main,
        border: theme.palette.mode === 'dark' ? '1px solid' : 'none',
        borderColor: theme.palette.primary.main,
        background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#fff',
        marginRight: '12px',
        borderRadius: '8px 0px 0px 8px'
    },
    h1: {
        textAlign: 'center',
        margin: '0.5rem 0rem 2rem 0rem',
        fontSize: '1.2em',
        color: 'black'
    },
    a: {
        textDecoration: 'none',
        color: theme.palette.primary[800]
    },
    ListBack: {
        backgroundColor: '#d4d7e7',
        borderRadius: '9px'
    },
    mail: {
        textDecoration: 'none',
        color: theme.palette.primary[800],
        fontSize: '0.75rem',
        paddingRight: '1rem'
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

// ===========================|| PROGRESS BAR WITH LABEL ||=========================== //

function LinearProgressWithLabel({ value, ...others }) {
    const classes = useStyles();

    return (
        <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
            <Grid item>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6" className={classes.listPrimary}>
                            Progress
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" color="inherit">{`${Math.round(value)}%`}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <BorderLinearProgress value={value} variant="determinate" {...others} />
            </Grid>
        </Grid>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number
};

// ===========================|| SIDEBAR MENU Card ||=========================== //

const MenuCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent sx={{ p: 2 }}>
                <List sx={{ p: 0, m: 0 }}>
                    <h1 className={classes.h1}>
                        Besoin d&apos;aide ? <br /> Contacter notre équipe !
                    </h1>
                    <ListItem alignItems="center" disableGutters sx={{ p: 0 }} className={classes.ListBack}>
                        <ListItemAvatar sx={{ mt: 0 }}>
                            <Avatar variant="rounded" className={classes.menuAvatar}>
                                <IconPhone />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            sx={{ mb: 0 }}
                            primary={
                                <Typography variant="subtitle1" className={classes.listPrimary}>
                                    {' '}
                                    <a className={classes.a} href="tel:+33622113908">
                                        06 22 11 39 08
                                    </a>
                                </Typography>
                            }
                            // secondary={<Typography variant="caption"> 28/23 GB</Typography>}
                        />
                    </ListItem>
                    <ListItem alignItems="center" disableGutters sx={{ mt: 3, p: 0 }} className={classes.ListBack}>
                        <ListItemAvatar sx={{ mt: 0 }}>
                            <Avatar variant="rounded" className={classes.menuAvatar}>
                                <IconMail />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            sx={{ mb: 0 }}
                            primary={
                                <Typography variant="subtitle1" className={classes.listPrimary}>
                                    {' '}
                                    <a className={classes.mail} href="mailto:Apollo.Immo@info.com">
                                        {' '}
                                        Apollo.Immo@info.com{' '}
                                    </a>
                                </Typography>
                            }
                            // secondary={<Typography variant="caption"> 28/23 GB</Typography>}
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default MenuCard;
