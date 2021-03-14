import React from "react";
import styled from 'styled-components';

const A = styled.a`
    text-decoration: none;
    color: rgb(215, 231, 241);
`;

function Logo() {
    return (
    <div class="title">
        <A href="/">$ programmer_life<span class="blinker"> █</span></A>
    </div>);
}


export default Logo;