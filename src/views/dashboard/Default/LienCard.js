import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';

// project imports
import { IconChevronRight } from '@tabler/icons';
// ChevronRight

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        },
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        paddingLeft: '1.5rem',
        marginBottom: '2rem'
    },
    p: {
        color: 'black'
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading }) => {
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
            <Card className={classes.card}>
                <p className={classes.p}>Locataire</p>
                <IconChevronRight />
                <p className={classes.p}>Mon dossier</p>
            </Card>
        </>
    );
};

EarningCard.propTypes = {
    isLoading: PropTypes.bool
};

export default EarningCard;
