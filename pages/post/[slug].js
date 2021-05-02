import React from "react"
import App from '../../src/organisms/App'


function PostDetail({post}) {
    return (<App>
        
    </App>)
    
}

export async function getStaticPaths() {
    const paths = ["/post/helloworld", "/post/segundopostdeteste"];
    return {
        paths,
        fallback: false,
    };
}



export default PostDetail