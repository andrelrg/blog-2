import styled from 'styled-components';
import Head from '../atoms/Head'

const Body = styled.div`
    color: rgb(215, 231, 241);
    background: #1b2124;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
    font-size: 17px;
`;

function App() {
    return (
        <Body>
            <Head />
        </Body>
    );
}

export default App;