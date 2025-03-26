import { useState } from 'react';
import './PostList.css'
import { posts } from './post.js';

const Post = ({ item, setComments, comment }) => {
    const [likeCount, setLikeCount] = useState(0);
    
    return (
        <>
            <li className='comment'>
                <img src={item.avatar} />
                <div className='comment-details'>
                    <p className='user-name'>{item.name}</p>
                    <p className='comment-text'>{item.comment}</p>
                    <p className='comment-time'>{item.time}</p>
                    <button className='delete-button' onClick={() => setComments(comment.filter((i,idx)=>i.name != item.name))}>삭제</button>
                    <button className='like-button' onClick={() => setLikeCount(likeCount + 1)}>like</button>
                    <span>{likeCount}</span>
                </div>
            </li>
        </>

    )
}

const PostList = () => {
    const [comment, setComments] = useState(posts);
    return (
        <div>
            <ul className='comment-list'>
                {comment.map((item) => {
                    return (
                        <Post item={item} setComments={setComments} comment={comment}/>
                    )
                })}
            </ul>
        </div>
    )
}


export default PostList;