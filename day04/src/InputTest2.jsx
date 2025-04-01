import React from "react";
import { useState } from "react";
import './inputTest1.css';

const InputTest2 = () => {
    const user1 = {
        id: 0,
        name: '',
        email: '',
        nickname : '',
    };
    const [user, setUser] = useState(user1);
    const handle = (e)=>{
        setUser({
            ...user,
            
        })
    }
    return (
        <div>
            <form>
                <h1> 로그인</h1>
                <li >이름<input type="text" onChange={
                    (e) => setUser({
                        ...user,
                        name: e.target.value,
                    })
                } value={user.name} /></li>
                <li>이메일<input type="email" onChange={
                    (e) => setUser({
                        ...user,
                        email: e.target.value,
                    })} value={user.email} />
                </li>
                <li>닉네임<input type="text" onChange={
                    (e) => setUser({
                        ...user,
                        nickname: e.target.value,
                    })} value={user.nickname} />
                </li>
                {console.log(user)}
                <li><button type="button" action="">확인 </button>
                    <button onClick={() => setUser({
                        id: 0,
                        name: '',
                        email: '',
                        nickname: '',
                    })} >취소</button></li>
            </form>
            <div id="modal">
                입력된 이름은 <span>{user.name}</span>이고 입력된 이메일은 <span>{user.email}</span> 입력된 닉네임은 <span>{user.nickname}</span>
            </div>
        </div>
    );
}

export default InputTest2;