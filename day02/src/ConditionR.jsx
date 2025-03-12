import { useState } from 'react';

const ConditionR = ()=>{
    const [condition, setCondition] = useState(true);
    return(
        <div>
            <div className='container'>
                <p>{condition ? "":"환영합니다~!"}</p>
                <button onClick={()=>setCondition(!condition)} className={condition ? "login" : "logout"}>
                    {condition ? "로그인" : "로그아웃"}
                </button>
            </div>
            <hr/>
            <p>모두함꼐 리액트 공부</p>
        </div>
    )
}

export default ConditionR;