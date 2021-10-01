import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import { IoEyeSharp } from 'react-icons/io';
import { IconEye } from '@tabler/icons';

const Button = ({ label, variant, styles }) => (
    <ButtonStyle
        className={`button ${variant === 'secondary' ? 'button--secondary' : 'button--primary'} styles ${
            styles === 'style1' ? 'styles--style1' : ''
        }`}
    >
        <a href="/certif.pdf" target="_blank">
            {label}
        </a>
        <IconEye />
    </ButtonStyle>
);

const ButtonStyle = styled(motion.button)`
    /* @font-face {
        font-family: 'ubuntu';
        src: url('./../../../assets/font/Ubuntu-Regular.ttf') format('ttf');
    } */

    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #0b3d91;
    border-radius: 5px;
    /* font-size: clamp(0.8rem, 1.3vw, 2rem); */
    text-align: center;
    padding: 0.7em 0.5em;
    color: #ffffff;
    width: clamp(13.5rem, 15vw, 25rem);

    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;

    svg {
        min-width: 12%;
        max-width: 12%;
        height: 2rem;
    }

    a {
        text-decoration: none;
        font-size: clamp(0.8rem, 1vw, 0.85rem);
    }

    &.button {
        &--secondary {
            background: #ffffff;
            a {
                color: #0b3d91;
            }
            color: #0b3d91;
        }
        &--primary {
            a {
                color: white;
            }
            background: #0b3d91;
        }
    }

    &.styles {
        &--style1 {
            padding: 1em 0em;
            width: clamp(10rem, 15vw, 20rem);
        }
        &--style2 {
            padding: 1em 0em;
            width: clamp(10rem, 15vw, 20rem);
        }
    }
`;
export default Button;
