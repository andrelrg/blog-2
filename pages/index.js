import React from "react";
import App from '../src/organisms/App'

function Index() {
    return (<App>
        <style jsx global>{`
            html {
               color: rgb(215, 231, 241);
               background: #1b2124;
               line-height: 1.7;
               font-size: 17px;
            }
        `}</style>
    </App>)
    
}

export default Index;