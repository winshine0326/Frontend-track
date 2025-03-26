import { useState } from 'react';
import './PostList.css'
import { posts } from './post.js';

const Post = ({ item, setComments, comment ,like, onLike}) => {
    return (
        <>
            <li className='comment'>
                <img src={item.avatar} />
                <div className='comment-details'>
                    <p className='user-name'>{item.name}</p>
                    <p className='comment-text'>{item.comment}</p>
                    <p className='comment-time'>{item.time}</p>
                    <button className='delete-button' onClick={() => {setComments(comment.filter((i,idx)=>i.name != item.name))}}>삭제</button>
                    <button className='like-button' onClick={() => onLike()}>like</button>
                    <span>{like}</span>
                </div>
            </li>
        </>

    )
}

const PostList2 = () => {
    const [comment, setComments] = useState(posts);
    const [likeCount, setLikeCount] = useState(posts.map((item,idx)=>{return item.isLike}));
    return (
        <div>
            <ul className='comment-list'>
                {comment.map((item,index) => {
                    return (
                        <Post 
                        key={index} 
                        item={item} 
                        setComments={setComments}
                        comment={comment} 
                        like = {item.isLike}
                        onLike={()=>{
                            const newComments = [...comment]
                            newComments[index].isLike +=1;
                            setComments(newComments);
                        }}
                        />
                    )
                })}
            </ul>
        </div>
    )
}


export default PostList2;