import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledLink = styled.a`
    color: ${props => props.active ? "var(--theme-color)" : "var(--font-color)"};
    text-decoration: none;
`

const LinkWrapper = styled.div`
    cursor: pointer;
    &:hover ${StyledLink} {
        color: var(--theme-color);
    }
`

function NavLink({href, active, children, prefetch=true}) {
    if (prefetch)
        return (
            <LinkWrapper><Link href={href}><StyledLink active={active}>{children}</StyledLink></Link></LinkWrapper>
        )
    else
        return (
            <LinkWrapper><a href={href}><StyledLink active={active}>{children}</StyledLink></a></LinkWrapper>
        )
}

export default NavLink;