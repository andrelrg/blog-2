import React from "react";
import styled, { keyframes } from 'styled-components';

const StyledA = styled.a`
    text-decoration: none;
    color: rgb(215, 231, 241);
`;

const blink = keyframes`
    50% {
        opacity: 0;
    }
`;

const BlinkerSpan = styled.span`
    animation: ${blink} 1s linear infinite;
    font-size: 18px;
`;

function Logo() {
    return (
    <div>
        <StyledA href="/">$ programmer_life<BlinkerSpan> █</ BlinkerSpan></StyledA>
    </div>);
}


export default Logo;