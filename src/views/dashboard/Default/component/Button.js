import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Button = ({ label, variant, styles }) => (
    <ButtonStyle
        className={`button ${variant === 'secondary' ? 'button--secondary' : 'button--primary'} styles ${
            styles === 'style1' ? 'styles--style1' : 'styles--style2'
        }`}
    >
        {label}
    </ButtonStyle>
);

const ButtonStyle = styled(motion.button)`
    border: 2px solid #0b3d91;
    border-radius: 5px;
    /* font-size: clamp(0.8rem, 1.3vw, 2rem); */
    text-align: center;
    padding: 0.7em 0em;
    color: #ffffff;
    width: clamp(12rem, 15vw, 25rem);

    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;

    &.button {
        &--secondary {
            font-weight: 600;
            background: #ffffff;
            color: #3f3d56;
            border: none !important;
            border-radius: 50px;
        }
        &--primary {
            background: #0b3d91;
            @media (max-width: 37.45em) {
                border: none !important;
                border-radius: 50px;
            }
        }
    }

    &.styles {
        &--style1 {
            padding: 1em 0em;
            /* width: clamp(12rem, 15vw, 20rem); */
        }
        &--style2 {
            margin-top: 1.5rem;
            padding: 1em 0em;
            /* width: clamp(12rem, 15vw, 20rem); */
        }
    }
`;
export default Button;
