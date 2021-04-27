import React from "react";
import App from '../src/organisms/App'
import PostsList from '../src/molecules/PostsList'

function Index(props) {
    return (<App>
        <PostsList posts={props.posts}></PostsList>
    </App>)
    
}

export async function getStaticProps() {

    const res = await fetch('/api/posts/')
    const posts = await res.json()

    return {
        props: {
            posts: posts
        }
    }
}

export default Index;