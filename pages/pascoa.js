import React, { useState } from "react";
import App from '../src/organisms/App'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 100px;
    background-color: pink;
`;


function Pacoa() {
    const [redirect, setRedirect] = useState({
        first: false,
        second: false,
        third: false,
    });

    const onInputChange1 = (event) => {
        let text = event.target.value;
        if (text === "tkmank"){
            setRedirect(prevState => ({
                ...prevState,
                first: true
            }))
        }
    }

    const onInputChange2 = (event) => {
        let text = event.target.value;
        if (text === "tgtcnebt"){
            setRedirect(prevState => ({
                ...prevState,
                second: true
            }))
        }
    }

    const onInputChange3 = (event) => {
        let text = event.target.value;
        if (text === "vhkhgtobknl"){
            setRedirect(prevState => ({
                ...prevState,
                third: true
            }))
        }
    }

    if(redirect.first && redirect.second && redirect.third) {
        if (typeof window !== "undefined") {
            window.location = "/boa";
        }    }else{
        return (
            <App>
                <StyledDiv>
                    <input type="text" placeholder="xxxxx-8008" onChange={onInputChange1}></input>
                    <input type="text" placeholder="Вы получите эту информацию от нашей мамы" onChange={onInputChange2}></input>
                    <input type="text"placeholder="Hex76686b6867746f626b6e6c" onChange={onInputChange3}></input>
                </StyledDiv>
            </App>)
    }
    //tkmank tgtcnebt vhkhgtobknl
                      
}

export default Pacoa;