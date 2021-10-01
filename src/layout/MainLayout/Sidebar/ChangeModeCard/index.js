import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { ButtonBase, InputAdornment, OutlinedInput } from '@material-ui/core';

import { IconSearch } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({}));

// ===========================|| PROGRESS BAR WITH LABEL ||=========================== //

function ChangeModeCard() {
    const classes = useStyles();

    return (
        <OutlinedInput
            sx={{ mt: 2 }}
            className={classes.searchControl}
            id="input-search-header"
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            placeholder="Rechercher un bien"
            startAdornment={
                <InputAdornment position="start">
                    <IconSearch stroke={1.5} size="1rem" className={classes.startAdornment} />
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                    <ButtonBase sx={{ borderRadius: '12px' }}> </ButtonBase>
                </InputAdornment>
            }
            aria-describedby="search-helper-text"
            inputProps={{
                'aria-label': 'weight'
            }}
        />
    );
}

export default ChangeModeCard;
