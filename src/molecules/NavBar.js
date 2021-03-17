import React from 'react'
import Logo from '../atoms/Logo'
import styled from 'styled-components'

const StyledHr = styled.hr`
    box-shadow: 2px 3px 5px black;
`;

const StyledNav = styled.div`
    padding-top: 15px;
`;

function NavBar() {
    return (
        <StyledNav>
            <Logo />
            <StyledHr ></StyledHr>
        </StyledNav>
    );
}

export default NavBar;