import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Divider, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import MUIFormControl from '@material-ui/core/FormControl';

// ===========================|| FORM CONTROL ||=========================== //

const FormControl = ({ captionLabel, formState, iconPrimary, iconSecondary, placeholder, textPrimary, textSecondary }) => {
    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="small" sx={{ color: 'grey.700' }} /> : null;

    const IconSecondary = iconSecondary;
    const secondaryIcon = iconSecondary ? <IconSecondary fontSize="small" sx={{ color: 'grey.700' }} /> : null;

    const errorState = formState === 'error';

    return (
        <MUIFormControl fullWidth error={errorState}>
            <InputLabel>{captionLabel}</InputLabel>
            <OutlinedInput
                placeholder={placeholder}
                type="text"
                label={captionLabel}
                startAdornment={
                    <>
                        {primaryIcon && <InputAdornment position="start">{primaryIcon}</InputAdornment>}
                        {textPrimary && (
                            <>
                                <InputAdornment position="start">{textPrimary}</InputAdornment>
                                <Divider sx={{ height: 28, m: 0.5, mr: 1.5 }} orientation="vertical" />
                            </>
                        )}
                    </>
                }
                endAdornment={
                    <>
                        {secondaryIcon && <InputAdornment position="end">{secondaryIcon}</InputAdornment>}
                        {textSecondary && (
                            <>
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <InputAdornment position="end">{textSecondary}</InputAdornment>
                            </>
                        )}
                    </>
                }
            />
        </MUIFormControl>
    );
};

FormControl.propTypes = {
    captionLabel: PropTypes.string,
    formState: PropTypes.string,
    iconPrimary: PropTypes.object,
    iconSecondary: PropTypes.object,
    placeholder: PropTypes.string,
    textPrimary: PropTypes.string,
    textSecondary: PropTypes.string
};

export default FormControl;
