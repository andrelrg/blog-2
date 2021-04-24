import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledLink = styled.a`
    padding-left: 15px;
    padding-right: 15px;
    color: ${props => props.active ? "var(--theme-color)" : "var(--font-color)"};
    text-decoration: none;
`

const LinkWrapper = styled.div`
  &:hover ${StyledLink} {
    color: var(--theme-color);
  }
`

function NavLink(props) {
    return (
        <LinkWrapper><Link href={props.href}><StyledLink active={props.active}>{props.children}</StyledLink></Link></LinkWrapper>
    )
}

export default NavLink;