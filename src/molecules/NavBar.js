import React from 'react'
import Logo from '../atoms/Logo'
import Link from '../atoms/NavLink'
import styled from 'styled-components'
import { useRouter } from 'next/router'


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

const LinkWrapper = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`;

const NavHolder = styled.div`
    position: sticky;
`;

function NavBar() {
    
    const router = useRouter()
    let links = {
        home: router.pathname == "/",
        about: router.pathname == "/about"

    }

    return (
        <NavHolder>
            <StyledNav>
                <Logo />
                <LinksHolder>
                    <LinkWrapper><Link href="/" active={links.home}>Home</Link></LinkWrapper>
                   <LinkWrapper><Link href="/about" active={links.about}>About</Link></LinkWrapper>
                </LinksHolder>
            </StyledNav>
            <StyledHr ></StyledHr>
        </NavHolder>
    );
}

export default NavBar;