import React from "react"
import styled from 'styled-components'
import App from '../src/organisms/App'
import PostsList from '../src/organisms/PostsList'

const PostsWrapper = styled.div`
    max-width: 800px;
    display: flex;
    justify-content: center;
    margin: auto;
`

function Index(props) {
    return (<App>
        <PostsWrapper>
            <PostsList posts={props.posts}></PostsList>
        </PostsWrapper>
    </App>)
}

export async function getStaticProps({slug}) {
    const server = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://blog-2-git-progress-1-andrelrg.vercel.app';

    const res = await fetch(server + '/api/posts/')
    const posts = await res.json()

    return {
        props: {
            posts: posts
        }
    }
}

export default Index;