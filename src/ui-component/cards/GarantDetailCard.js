import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Card, Grid, Menu, MenuItem, Typography } from '@material-ui/core';

// project card
import { gridSpacing } from 'store/constant';
import Avatar from '../extended/Avatar';
import Button from '../../views/dashboard/Default/component/ButtonIcone';

// assets
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import NotInterestedTwoToneIcon from '@material-ui/icons/NotInterestedTwoTone';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';

const avatarImage = require.context('assets/images/profile', true);

// style card
const useStyles = makeStyles((theme) => ({
    followerBlock: {
        padding: '1rem',
        [theme.breakpoints.up('lg')]: {
            padding: '1rem 3rem 2rem 3rem'
        },
        [theme.breakpoints.up('xl')]: {
            padding: '1rem 3rem 2rem 3rem'
        }
    },
    nom: {
        display: 'flex',
        [theme.breakpoints.up('xs')]: {
            justifyContent: 'space-between',
            flexDirection: 'column'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        [theme.breakpoints.up('xl')]: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    },
    ressources: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
        [theme.breakpoints.up('xs')]: {
            padding: '1.5rem 0rem 0.5rem'
        },
        [theme.breakpoints.up('sm')]: {
            padding: '0rem'
        }
    },
    coord: {
        gap: '0.8rem',
        display: 'flex',
        padding: '1rem 0 0 1.5rem',
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: '0.5rem 6rem'
        }
    },
    boutons: {
        paddingLeft: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem'
    },
    h3: {
        color: '#3F3D56',
        padding: '2rem 0 1rem 1.5rem'
    },
    h4: {
        color: '#3F3D56',
        [theme.breakpoints.up('xs')]: {
            marginTop: '1.5rem'
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '0rem'
        },
        marginBottom: '0.2rem',
        fontSize: 'clamp(1.5rem, 1.5vw, 2rem)'
    },
    pBlue: {
        color: theme.palette.secondary[800]
    },
    h5: {
        color: theme.palette.secondary[800],
        fontWeight: 'bold'
    },
    infos: {
        display: 'flex',
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    }
}));

// ===========================|| USER DETAILS CARD ||=========================== //

const GarantDetailCard = ({ about, avatar, contact, email, location, name, role }) => {
    const classes = useStyles();
    const avatarProfile = avatar && avatarImage(`./${avatar}`).default;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card className={classes.followerBlock}>
            <Grid className={classes.infos}>
                <Grid>
                    <Typography className={classes.h4} variant="h4">
                        Thomas Prieur
                    </Typography>
                    <Typography variant="p">Banquier</Typography>
                </Grid>
                <Grid className={classes.ressources}>
                    <Typography className={classes.h5} variant="h5">
                        Ressource financière
                    </Typography>
                    <Typography className={classes.pBlue} variant="p">
                        80 000€ / an
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
                <Grid container spacing={gridSpacing} className={classes.coord}>
                    <Grid>
                        <Typography variant="caption">Téléphone</Typography>
                        <Typography variant="h6">06.32.32.55.48</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="caption">Email</Typography>
                        <Typography variant="h6">marieprieur@gmail.com</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="caption">Adresse</Typography>
                        <Typography variant="h6">45 rue de la Républie, 67500 Haguenau</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Typography className={classes.h3} variant="h3">
                    Documents
                </Typography>
                <Grid className={classes.boutons}>
                    <Button label="Pièce d'identité ou passeport" />
                    <Button label="3 derniers bulletins de salaire" />
                    <Button label="2 derniers bilans" />
                    <Button label="Justificatif de domicile" />
                    <Button label="Avis d'imposition" />
                    <Button label="Contrat" />
                </Grid>
            </Grid>
        </Card>
    );
};

GarantDetailCard.propTypes = {
    about: PropTypes.string,
    avatar: PropTypes.string,
    contact: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string
};

export default GarantDetailCard;
