import React from 'react';
import styled from 'styled-components'

const StyledLink = styled.a`
    padding-left: 15px;
    padding-right: 15px;
    color: ${props => props.active ? "var(--theme-color)" : "var(--font-color)"};
    text-decoration: none;
`;

const LinkWrapper = styled.div`
  &:hover ${StyledLink} {
    color: var(--theme-color);
  }
`

function Link(props) {
    return (
        <LinkWrapper><StyledLink {...props} ></StyledLink></LinkWrapper>
    )
}

export default Link;