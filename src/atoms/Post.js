import React from 'react'
import moment from 'moment'
import Avatar from '../atoms/Avatar'
import NavLink from '../atoms/NavLink'
import styled from 'styled-components'

const showdown  = require('showdown')

const StyledPostBox = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledPostItems = styled.div`
    padding-right: ${props => props.right || 8}px;
    padding-left: ${props => props.left || 8}px;
`

function TextToHTML({text}){
    const converter = new showdown.Converter()
    return (
        <div dangerouslySetInnerHTML={{__html: converter.makeHtml(text)}}/>
        )
}

function cutText(text){
    return text.slice(0,200) + '...'
}

function Post({post}){
    return (
        <article style={{ lineHeight: 1.5 }}>
            <NavLink href={'post/' + post.slug}><h1>{post.title}</h1></NavLink>
            <div style={{ textAlign: 'left' }}>
                <TextToHTML text={post.text} />
            </div>
            <StyledPostBox>
                <StyledPostItems>
                    <time dateTime={post.date}>{moment(new Date(post.date * 1000)).format("DD/MM/yyyy")}</time>
                </StyledPostItems>
                <StyledPostItems right={1}>
                    <i>from:</i>
                </StyledPostItems>
                <StyledPostItems left={1}>
                    <NavLink href={'https://github.com/' + post.author} prefetch={false}>{post.author}</NavLink>
                </StyledPostItems>
                <Avatar src={post.avatar_url}></Avatar>
            </StyledPostBox>
        </article>
    ) 
}

export default Post