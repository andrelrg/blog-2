import React from "react"
import App from '../../src/organisms/App'


function PostDetail() {
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

export async function getStaticProps() {

    return {
        props: {
        }
    }
}

export default PostDetail