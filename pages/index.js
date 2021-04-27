import React from "react";
import App from '../src/organisms/App'
import PostsList from '../src/molecules/PostsList'

function Index(props) {
    return (<App>
        <PostsList posts={props.posts}></PostsList>
    </App>)
    
}

export async function getStaticProps() {
    const server = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://blog-2-git-main-andrelrg.vercel.app';

    const res = await fetch(server + '/api/posts/')
    const posts = await res.json()

    return {
        props: {
            posts: posts
        }
    }
}

export default Index;