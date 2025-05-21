import React, { useReducer, useState } from 'react'; //0.useReducer import하기
import { Link } from 'react-router-dom';
import '../App.css';
import WriteModal from './WritingModal';


interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
}

interface BoardState {
  posts: Post[];
}

type ActionType = 'ADD_POST' | 'DELETE_POST' | 'EDIT_POST';

interface Action {
  type: ActionType;
  payload: any;
}

const initialState: BoardState = {
  posts: [
    { id: 1, title: '첫 번째 게시글', author: '작성자1', date: '2024-03-20' },
    { id: 2, title: '두 번째 게시글', author: '작성자2', date: '2024-03-21' },
  ]
};

function boardReducer(state: BoardState, action: Action): BoardState {
  console.log(action)
  //1.리듀서 함수 정의하기 'ADD_POST' | 'DELETE_POST' | 'EDIT_POST'
  switch(action.type){
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case 'EDIT_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id
            ? { ...post, title: action.payload.title }
            : post
        )
      };
    default:
      return state;
  }
}

export default function Board() {
 
  //2. useReducer 호출하기
  const [state, dispatch] = useReducer(boardReducer, initialState);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const handleOpenModal = (post?: Post) => {
    if (post) {
      setEditingPost(post);
    } else {
      setEditingPost(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPost(null);
  };

  const handleSubmitPost = (title: string) => {
    if (editingPost) {
      dispatch({ //3. dispatch ({action객체})로 리듀서함수 호출하기
        type: 'EDIT_POST',
        payload: {
          id: editingPost.id,
          title
        }
      });
    } else {
      const newPost: Post = {
        id: Date.now(),
        title,
        author: '새로운 작성자',
        date: new Date().toISOString().split('T')[0],
      };
      dispatch({
        type: 'ADD_POST',
        payload: newPost
      });
    }
  };

  const handleDeletePost = (id: number) => {
    if (window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
      dispatch({
        type: 'DELETE_POST',
        payload: id
      });
    }
  };

  return (
    <div className="board-container">
      <div className="board-header">
        <h1>게시판</h1>
        <button className="write-button" onClick={() => handleOpenModal()}>
          글쓰기
        </button>
      </div>

      <table className="board-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {state.posts.map((post, index) => (
            <tr key={post.id}>
              <td>{state.posts.length - index}</td>
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>
                <button 
                  onClick={() => handleOpenModal(post)}
                  className="edit-button"
                >
                  수정
                </button>
                <button 
                  onClick={() => handleDeletePost(post.id)}
                  className="delete-button"
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <WriteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitPost}
        initialTitle={editingPost?.title}
      />
    </div>
  );
} 

