import react from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
    vertical-align: middle;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

function Avatar({src}) {
    return (
        <StyledImg src={src}></StyledImg>
    )
}

export default Avatar;