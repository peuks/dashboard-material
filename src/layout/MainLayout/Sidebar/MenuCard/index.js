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
// import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

import { IconCornerUpLeftDouble } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
        marginBottom: '22px',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '157px',
            height: '157px',
            background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.primary[200],
            borderRadius: '50%',
            top: '-105px',
            right: '-96px'
        }
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
        marginRight: '12px'
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
            <CardContent sx={{ p: 2, pb: '16px !important' }}>
                <List sx={{ p: 0, m: 0 }}>
                    <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
                        <ListItemAvatar sx={{ mt: 0 }}>
                            <Avatar variant="rounded" className={classes.menuAvatar}>
                                <IconCornerUpLeftDouble fontSize="inherit" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            sx={{ mt: 0 }}
                            primary={
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 'bold', maxWidth: '79%' }}
                                    className={classes.listPrimary}
                                >
                                    {' '}
                                    Passer en mode propriétaire
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default MenuCard;
