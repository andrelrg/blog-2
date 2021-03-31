import React from "react";
import styled from 'styled-components';
import Head from '../atoms/Head';
import NavBar from '../molecules/NavBar'

const Body = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`;

function App({children}) {
    return (
        <Body>
            <Head />
            <NavBar />
            <div>{children}</div>
        </Body>
    );
}

export default App;