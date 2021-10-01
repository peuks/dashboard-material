import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Box, ButtonBase } from '@material-ui/core';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import MobileSection from './MobileSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

// assets
import { IconMenu2 } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    headerAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        transition: 'all .2s ease-in-out',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
        '&:hover': {
            background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
            color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
        }
    },
    boxContainer: {
        width: '100% !important',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: 'auto'
        }
    },
    flex: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    logo: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}));

// ===========================|| MAIN NAVBAR / HEADER ||=========================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const classes = useStyles();

    return (
        <>
            {/* logo & toggler button */}
            <div className={classes.boxContainer}>
                <div className={classes.flex}>
                    <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                        <LogoSection />
                    </Box>
                    <ButtonBase sx={{ display: { xs: 'block', md: 'none', xl: 'none' }, borderRadius: '12px', overflow: 'hidden' }}>
                        <Avatar variant="rounded" className={classes.headerAvatar} onClick={handleLeftDrawerToggle} color="inherit">
                            <IconMenu2 stroke={1.5} size="1.3rem" />
                        </Avatar>
                    </ButtonBase>
                    <div className={classes.logo}>
                        <LogoSection />
                    </div>
                    <div />
                </div>
            </div>

            {/* header search */}
            <div className={classes.grow} />

            {/* notification & profile */}
            {/* <NotificationSection /> */}
            <ProfileSection />

            {/* mobile header */}
            {/* <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <MobileSection />
            </Box> */}
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
