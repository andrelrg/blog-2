import React from "react";
import styled from 'styled-components';
import Head from '../atoms/Head';
import NavBar from '../molecules/NavBar'

const Body = styled.div`
`;

function App() {
    return (
        <Body>
            <Head />
            <NavBar />
        </Body>
    );
}

export default App;