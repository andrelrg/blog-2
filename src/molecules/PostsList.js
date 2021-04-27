import Divider from '@material-ui/core/Divider/Divider'
import moment from 'moment'
import Avatar from '../atoms/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import NavLink from '../atoms/NavLink'
import React from 'react'
import styled from 'styled-components'

const StyledPostBox = styled.div`
    display: flex;
    flex-direction: column;
`

function PostsList({ posts }){
    console.log(posts)
    return (
        <div id="mano">
            <List>
            { posts.map( ( { title, author, avatar_url, date, slug }, index) => (
                <ListItem key={slug}>
                    <StyledPostBox>
                        <NavLink href={'post/' + slug}><h2>{title}</h2></NavLink>
                            <NavLink href={'https://github.com/' + author}>{author}</NavLink>
                        </StyledPostBox>
                        \ <Avatar src={avatar_url}></Avatar>

                    
                </ListItem>
            ))}
            </List>
        </div>
    )
}
//{title: 'Hello world',author: 'andrelrg',    date: '1619477601',    slug: 'hello-world'  } 
export default PostsList

/*
<ListItem>
<article style={{ lineHeight: 1.35 }}>
    <h2>
    <strong>{title}</strong>
    </h2>
    <div style={{ textAlign: 'right' }}>
    <time dateTime={date}>{moment(date).fromNow()}</time>
    </div>
</article>
</ListItem>*/