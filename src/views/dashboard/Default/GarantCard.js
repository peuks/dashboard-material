import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

// assets
import SubCard from 'ui-component/cards/SubCard';
import GarantDetailsCard from 'ui-component/cards/GarantDetailCard';
import UserDetails from 'views/application/chat/UserDetails';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.secondary.dark,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background:
                theme.palette.mode === 'dark'
                    ? `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
                    : theme.palette.secondary[800],
            borderRadius: '50%',
            top: '-85px',
            right: '-95px',
            [theme.breakpoints.down('xs')]: {
                top: '-105px',
                right: '-140px'
            }
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background:
                theme.palette.mode === 'dark'
                    ? `linear-gradient(140.9deg, ${theme.palette.secondary.dark} -14.02%, rgba(144, 202, 249, 0) 85.50%)`
                    : theme.palette.secondary[800],
            borderRadius: '50%',
            top: '-125px',
            right: '-15px',
            opacity: 0.5,
            [theme.breakpoints.down('xs')]: {
                top: '-155px',
                right: '-70px'
            }
        }
    },
    content: {
        padding: '20px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary[800],
        marginTop: '8px'
    },
    avatarRight: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.secondary.dark,
        color: theme.palette.secondary[200],
        zIndex: 1
    },
    cardHeading: {
        fontSize: '2.125rem',
        fontWeight: 500,
        marginRight: '8px',
        marginTop: '14px',
        marginBottom: '6px'
    },
    subHeading: {
        fontSize: '1rem',
        fontWeight: 500,
        color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.secondary[200]
    },
    avatarCircle: {
        cursor: 'pointer',
        ...theme.typography.smallAvatar,
        backgroundColor: theme.palette.secondary[200],
        color: theme.palette.secondary.dark
    },
    circleIcon: {
        transform: 'rotate3d(1, 1, 1, 45deg)'
    },
    menuItem: {
        marginRight: '14px',
        fontSize: '1.25rem'
    },
    h2: {
        [theme.breakpoints.up('xs')]: {
            color: 'white'
        },
        [theme.breakpoints.up('sm')]: {
            color: '#0B3D91'
        },
        fontSize: 'clamp(0.85rem, 4vw, 1.5rem)',
        padding: '2rem 0rem 1rem 1.25rem'
    },
    marge: {
        marginLeft: '0',
        marginRight: '0',
        [theme.breakpoints.up('xs')]: {
            borderRadius: '0 !important',
            marginLeft: '-20px',
            marginRight: '-20px'
        },
        [theme.breakpoints.up('sm')]: {
            borderRadius: '12px',
            marginLeft: '0',
            marginRight: '0'
        }
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const GarantCard = ({ isLoading }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Grid className={classes.marge}>
                <Typography className={classes.h2} variant="h2" padding="0rem 0rem 1rem 1rem">
                    Garant 1
                </Typography>
                <SubCard>
                    <GarantDetailsCard {...UserDetails} />
                </SubCard>
            </Grid>
        </>
    );
};

GarantCard.propTypes = {
    isLoading: PropTypes.bool
};

export default GarantCard;
