import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Box, ButtonBase, Drawer, InputAdornment, OutlinedInput, useMediaQuery, Grid } from '@material-ui/core';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import MenuCard from './MenuCard';
import { drawerWidth } from 'store/constant';
import { IconSearch } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    drawer: {
        zIndex: '1',
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            display: 'block'
        },
        [theme.breakpoints.up('xl')]: {
            display: 'block'
        }
    },
    drawerPaper: {
        width: drawerWidth,
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderLeft: 'none',
        [theme.breakpoints.up('md')]: {
            top: '88px'
        }
    },
    ScrollHeight: {
        // position: 'fixed',
        height: 'calc(100vh - 88px)',
        paddingLeft: '16px',
        paddingRight: '16px',
        marginTop: '85px',
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh - 56px)'
        }
    },
    boxContainer: {
        display: 'flex',
        padding: '16px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));

// ===========================|| SIDEBAR DRAWER ||=========================== //

const Otherbar = ({ drawerOpen, drawerToggle, window }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <>
            <BrowserView>
                <PerfectScrollbar component="div" className={classes.ScrollHeight}>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }} />
                    <MenuList />
                    <MenuCard />
                </PerfectScrollbar>
            </BrowserView>
            <MobileView>
                <Box sx={{ px: 2 }}>
                    <MenuList />
                    <MenuCard />
                </Box>
            </MobileView>
        </>
    );

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Grid>{drawer}</Grid>
        </nav>
    );
};

Otherbar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};
export default Otherbar;
