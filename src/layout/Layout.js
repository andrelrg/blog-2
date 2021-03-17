import React from 'react';

function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
            :root{
                --background-color: #1b2124;
                --theme-color : #4d96bb;
                --next-to-background-color: #252d31;
                --font-color:  rgb(215, 231, 241);
                --second-font-color: rgb(139, 143, 145);
            }
            body {
               color: rgb(215, 231, 241);
               background: var(--background-color);
               line-height: 1.7;
               font-size: 17px;
            }
            
            
        `}</style>
      </div>
    );
  }
  
  export default Layout