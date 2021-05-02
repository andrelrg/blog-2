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

export async function getStaticProps({slug}) {
    const server = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://blog-2-git-progress-1-andrelrg.vercel.app';
    const res = await fetch(server + '/api/post/' + slug)
    const posts = await res.json()

    return {
        props: {
            posts: posts
        }
    }
}

export default PostDetail