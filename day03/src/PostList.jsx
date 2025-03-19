import { useState } from 'react';
import './PostList.css'

export const posts = [
    {
        name: '오주현',
        comment: '안녕하세요. 오주현입니다.',
        time: '2시간 전',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png', // 기본 아바타 이미지 URL
    },
    {
        name: '문소정',
        comment: '리액트로 프로젝트 만들고 있습니다.',
        time: '3시간 전',
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png', // 기본 아바타 이미지 URL
    },
    {
        name: '황지영',
        comment: '리액트 재미있어요.',
        time: '5시간 전',
        avatar: ' https://www.w3schools.com/w3images/avatar6.png', // 기본 아바타 이미지 URL
    },
    {
        name: '공덕현',
        comment: '리액트 벌써 3주차라니........',
        time: '5시간 전',
        avatar: ' https://www.w3schools.com/w3images/avatar5.png', // 기본 아바타 이미지 URL
    },
];

const Post = ({ item }) => {
    const [likeCount, setLikeCount] = useState(0);
    const [see, setSee] = useState(true);
    return (
        <>
            {see ? <li className='comment'>
                <img src={item.avatar} />
                <div className='comment-details'>
                    <p className='user-name'>{item.name}</p>
                    <p className='comment-text'>{item.comment}</p>
                    <p className='comment-time'>{item.time}</p>
                    <button className='delete-button' onClick={() => setSee(false)}>삭제</button>
                    <button className='like-button' onClick={() => setLikeCount(likeCount + 1)}>like</button>
                    <span>{likeCount}</span>
                </div>
            </li>
            :
            ""
            }
        </>

    )
}

const PostList = () => {

    return (
        <div>
            <ul className='comment-list'>
                {posts.map((item) => {
                    return (
                        <Post item={item} />
                    )
                })}
            </ul>
        </div>
    )
}


export default PostList;