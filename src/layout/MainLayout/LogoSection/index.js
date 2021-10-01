import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@material-ui/core';

// project imports
import config from 'config';
import Logo from './white.png';

// ===========================|| MAIN LOGO ||=========================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <img height="50" width="170" src={Logo} alt="" />
    </ButtonBase>
);

export default LogoSection;
