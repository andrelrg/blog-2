import React from 'react'
import Logo from '../atoms/Logo'
import Link from '../atoms/NavLink'
import styled from 'styled-components'

const StyledHr = styled.hr`
    box-shadow: 2px 3px 5px black;
`;

const StyledNav = styled.div`
    display: flex;
    
    justify-content: space-between;
    padding-top: 15px;
`;

const LinksHolder = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const NavHolder = styled.div`
    position: sticky;
`;

function NavBar() {
    return (
        <NavHolder>
            <StyledNav>
                <Logo />
                <LinksHolder>
                   <Link href="/" active="true">Home</Link>
                   <Link href="/posts">Posts</Link>
                   <Link href="/threads">Threads</Link>
                   <Link href="/about">About</Link>
                </LinksHolder>
            </StyledNav>
            <StyledHr ></StyledHr>
        </NavHolder>
    );
}

export default NavBar;