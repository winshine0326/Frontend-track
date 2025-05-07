//EventLoopTest.tsx
import { useState } from 'react';
import './App.css';
const MAX = 100000;
export default function App() {
    const [syncCount, setSyncCount] = useState(0);
    const [macroCount, setMacroCount] = useState(0);
    const [microCount, setMicroCount] = useState(0);
    const [syncTime, setSyncTime] = useState(0);
    const [macroTime, setMacroTime] = useState(0);
    const [microTime, setMicroTime] = useState(0);

    // 동기 코드
    const handleSync = () => {
        const startTime = Date.now();
        for (let i = 0; i <= MAX; i++) {
            setSyncCount(i);
        }
        const endTime = Date.now();
        setSyncTime(endTime - startTime);
    };

    // 매크로태스크 (setTimeout)
    const handleMacro = () => {
        const startTime = Date.now();
        for (let i = 0; i <= MAX; i++) {
            //setTimeout 매크로 태스크 작성
            setTimeout(() => {
                setMacroCount(i);
                if (i === MAX) {
                    const endTime = Date.now();
                    setMacroTime(endTime - startTime);
                }
            }, 0)
        }

    };

    // 마이크로태스크 (Promise)
    const handleMicro = () => {
        const startTime = Date.now();
        for (let i = 0; i <= MAX; i++) {
            //Promise 마이크로 태스크 작성
            Promise.resolve("Promise 성공").then(()=>{
                setMicroCount(i);
                if (i===MAX){
                    const endTime = Date.now();
                    setMicroTime(endTime - startTime);
                }
            })
        }
    };

    // 모두 동시 실행
    const handleAll = () => {
        handleSync();
        handleMacro();
        handleMicro();
    };

    return (
        <div style={{ padding: 32 }}>
            <ul>
                <li>
                    동기 코드: <button onClick={handleSync}>{syncCount}</button> (실행 시간: {syncTime}ms)
                </li>
                <li>
                    태스크(매크로): <button onClick={handleMacro}>{macroCount}</button> (실행 시간: {macroTime}ms)
                </li>
                <li>
                    마이크로 태스크: <button onClick={handleMicro}>{microCount}</button> (실행 시간: {microTime}ms)
                </li>
            </ul>
            <button onClick={handleAll} style={{ marginTop: 16 }}>
                모두 동시 실행
            </button>
        </div>
    );
};