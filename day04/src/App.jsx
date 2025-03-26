import { useState } from 'react'
import './App.css'

const msgList = [
  "안녕하세요",
  "2학년 학생입니다.",
  "리액트 수강생입니다.",
]
let msgCopy=[
  ...msgList,
  "강의가 끝났습니다."
];

function App() {
  return (
    <>
      <h1>{msgList}</h1>
      <h1>{msgCopy}</h1>
    </>
  )
}

export default App
