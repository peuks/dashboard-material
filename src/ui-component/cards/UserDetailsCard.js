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
        // [theme.breakpoints.up('md')]: {
        //     padding: '1rem'
        // },
        [theme.breakpoints.up('lg')]: {
            padding: '1rem 3rem 2rem 3rem'
        },
        [theme.breakpoints.up('xl')]: {
            padding: '1rem 3rem 2rem 3rem'
        },
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: theme.palette.mode === 'dark' ? '1px solid transparent' : `1px solid ${theme.palette.grey[100]}`,
        '&:hover': {
            borderColor: theme.palette.primary.main
        }
    },
    primaryLight: {
        color: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[500],
        cursor: 'pointer'
    },
    btnProfile: {
        width: '100%',
        '&:hover ': {
            color: '#fff'
        },
        '&.MuiButton-outlinedPrimary:hover ': {
            background: theme.palette.primary.main
        },
        '&.MuiButton-outlinedSecondary': {
            color: theme.palette.error.main,
            borderColor: theme.palette.error.main
        },
        '&.MuiButton-outlinedSecondary:hover ': {
            background: theme.palette.error.main,
            color: '#fff'
        }
    },
    pp: {
        marginTop: '-3rem',
        // display: 'flex',
        // justifyContent: 'center',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'absolute'
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
    description: {
        marginTop: '2rem'
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
    }
}));

// ===========================|| USER DETAILS CARD ||=========================== //

const UserDetailsCard = ({ about, avatar, contact, email, location, name, role }) => {
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
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid item xs zeroMinWidth>
                        <Avatar alt={name} size="lg" src={avatarProfile} className={classes.pp} />
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.nom}>
                    <Grid>
                        <Typography className={classes.h4} variant="h4">
                            Marie Prieur
                        </Typography>
                        <Typography variant="p">étudiante, avec garant</Typography>
                    </Grid>
                    <Grid className={classes.ressources}>
                        <Typography className={classes.h5} variant="h5">
                            Ressource financière
                        </Typography>
                        <Typography className={classes.pBlue} variant="p">
                            Locataire: 0 €
                        </Typography>
                        <Typography className={classes.pBlue} variant="p">
                            Garant : 80 000€ / an
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
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
                    <div className={classes.description}>
                        <Typography variant="caption">Description</Typography>
                        <Typography variant="h6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        </Typography>
                    </div>
                </Grid>
                <Grid>
                    <Typography className={classes.h3} variant="h3">
                        Documents
                    </Typography>
                    <Grid className={classes.boutons}>
                        <Button label="Pièce d'identité ou passeport" />
                        <Button variant="secondary" label="3 derniers bulletins de salaire" />
                        <Button label="2 derniers bilans" />
                        <Button label="Justificatif de domicile" />
                        <Button label="Avis d'imposition" />
                        <Button variant="secondary" label="Contrat" />
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

UserDetailsCard.propTypes = {
    about: PropTypes.string,
    avatar: PropTypes.string,
    contact: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string
};

export default UserDetailsCard;
