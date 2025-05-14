import React, { useState } from 'react';
import axios from 'axios';

function FormPostExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // 서버로 POST 요청 보내는 함수
  const handleSubmit = async (e:any) => {
    e.preventDefault(); // 폼 기본 동작(새로고침) 막기

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name,
        email
      });

      console.log('서버 응답:', response.data);
      alert('데이터 전송 성공!');
    } catch (error) {
      console.error('에러 발생:', error);
      alert('전송 실패 😥');
    }
  };

  return (
    <div>
      <h2>사용자 정보 입력</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름 입력"
          />
        </div>
        <div>
          <label>이메일:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 입력"
          />
        </div>
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
}

export default FormPostExample;