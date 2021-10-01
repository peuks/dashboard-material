import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Card, Grid, Menu, MenuItem, Typography } from '@material-ui/core';

// project imports
// DossierChart

import DossierChart from './chart-data/DossierChart';
import Button from './component/Button';

import { IconBulbOff, IconStar } from '@tabler/icons';
import Chart from 'react-apexcharts';

// style constant
const useStyles = makeStyles((theme) => ({
    box: {
        marginBottom: '2rem',
        display: 'flex',
        gap: '1rem',
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        [theme.breakpoints.up('xl')]: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        }
    },
    containerMobile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0.5rem 1.5rem 1rem 1.5rem',
        backgroundColor: '#FFDA41',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    container1: {
        [theme.breakpoints.up('xs')]: {
            maxWidth: '100%'
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '100%'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '100%'
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '55%'
        }
    },
    container2: {
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '100%',
            display: 'block'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '100%'
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '55%'
        }
    },
    pad: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem'
    },
    card: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
    },
    h1: {
        color: theme.palette.secondary[800],
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    h2: {
        marginTop: '0.5rem',
        marginBottom: '0',
        textAlign: 'center',
        color: 'black',
        fontSize: 'clamp(1rem, 2vw, 1.1rem)'
    },
    pMobile: {
        color: 'black',
        fontSize: 'clamp(0.75rem, 2vw, 0.8rem)',
        lineHeight: '1.3',
        maxWidth: '75%',
        [theme.breakpoints.up('xs')]: {
            display: 'block'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'block'
        },
        [theme.breakpoints.up('lg')]: {
            display: 'none'
        },
        [theme.breakpoints.up('xl')]: {
            display: 'none'
        }
    },
    pOrdi: {
        color: 'black',
        fontSize: 'clamp(0.75rem, 2vw, 0.8rem)',
        lineHeight: '1.3',
        maxWidth: '75%',
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
            display: 'block'
        },
        [theme.breakpoints.up('xl')]: {
            display: 'block'
        }
    },
    pgraph: {
        margin: '0 0 0.3rem 0',
        textAlign: 'center'
    },
    svgStar: {
        color: '#FFDA41',
        width: '2.15rem',
        height: '2.15rem'
        // marginLeft: '0.33rem'
    },
    svgBulb: {
        color: '#FFDA41',
        width: '2.35rem',
        height: '2.35rem'
    },
    ButtonEdit: {
        width: 'clamp(12rem, 15vw, 15rem)'
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
        <Grid>
            <h1 className={classes.h1}>Mon dossier Locataire</h1>
            <Grid className={classes.box}>
                <Card className={classes.containerMobile}>
                    <h2 className={classes.h2}>Dossier incomplet</h2>
                    <p>Veuillez ajouter les document manquant pour finaliser votre dossier locataire</p>
                    <Button label="Editer mon dossier" variant="secondary" />
                </Card>
                <Card className={classes.container1}>
                    <div className={classes.pad}>
                        <h2 className={classes.h2}>Candidater avec mon Astropass</h2>
                        <div>
                            <div className={classes.card}>
                                <IconStar className={classes.svgStar} />
                                <p className={classes.pMobile}>
                                    Grâce à votre Astropass vous-avez 75% de chances en plus d’obtenir votre location. Vos documents sont
                                    sécurisés.
                                </p>
                                <p className={classes.pOrdi}>
                                    Démarquez-vous grâce à notre dossier locataire. Vous-avez 75% de chances en plus d’obtenir votre
                                    location. Vos documents sont sécurisés.
                                </p>
                            </div>
                            <div className={classes.card}>
                                <IconBulbOff className={classes.svgBulb} />
                                <p className={classes.pMobile}>
                                    Vous pouvez aussi partager votre dossier à des propriétaires en dehors d’Apollo Immo grâce à un lien.
                                </p>
                                <p className={classes.pOrdi}>
                                    Démarquez-vous grâce à notre dossier locataire. Vous-avez 75% de chances en plus d’obtenir votre
                                    location. Vos documents sont sécurisés.
                                </p>
                            </div>
                        </div>
                        <Button label="Partager mon dossier" />
                    </div>
                </Card>
                <Card className={classes.container2}>
                    <div className={classes.pad}>
                        <h2 className={classes.h2}>Dossier incomplet</h2>
                        <Chart {...DossierChart} />
                        <p className={classes.pgraph}>Veuillez ajouter les document manquant pour finaliser votre dossier locataire</p>
                        <Button label="Editer mon dossier" className={classes.ButtonEdit} styles="style1" />
                    </div>
                </Card>
            </Grid>
        </Grid>
    );
};

EarningCard.propTypes = {
    isLoading: PropTypes.bool
};

export default EarningCard;
