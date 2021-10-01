import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Box, ButtonBase, Drawer, InputAdornment, OutlinedInput, useMediaQuery } from '@material-ui/core';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import MenuCard from './MenuCard';
import { drawerWidth } from 'store/constant';
import { IconSearch } from '@tabler/icons';
import Avatar from 'ui-component/extended/Avatar';
import ChangeModeCard from './ChangeModeCard';

// style constant
const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    drawerPaper: {
        width: drawerWidth,
        background: theme.palette.background.default,
        color: theme.palette.text.paper,
        borderRight: 'none',
        [theme.breakpoints.up('xs')]: {
            background: theme.palette.primary[800]
        },
        [theme.breakpoints.up('md')]: {
            top: '88px',
            background: theme.palette.background.default
        }
    },
    ScrollHeight: {
        height: 'calc(100vh - 88px)',
        paddingLeft: '16px',
        paddingRight: '16px',
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

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <div className={classes.boxContainer}>
                    <LogoSection />
                </div>
            </Box>
            <BrowserView>
                <PerfectScrollbar component="div" className={classes.ScrollHeight}>
                    <ChangeModeCard />
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

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                classes={{
                    paper: classes.drawerPaper
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </nav>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default Sidebar;
