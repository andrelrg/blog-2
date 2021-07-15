import React from 'react'
import Divider from '@material-ui/core/Divider/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Post from '../atoms/Post'


function PostsList({ posts }){
    return (
        <div>
            <List>
            { posts.map( (post, index) => (
                <ListItem key={index}>
                    <Post post={post}></Post>
                    <Divider />
                </ListItem>
            ))}
            </List>
        </div>
    )
}
export default PostsList
