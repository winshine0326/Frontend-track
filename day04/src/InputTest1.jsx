import React from "react";
import { useState } from "react";
import './inputTest1.css';

const InputTest1 = () => {
    const user1 = {
        id: 0,
        name: '',
        email: '',
    };
    const [user, setUser] = useState(user1);
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
                {console.log(user)}
                <li><button type="submit" action="">확인 </button>
                    <button onClick={() => setUser({
                        id: 0,
                        name: '',
                        email: '',
                    })} >취소</button></li>
            </form>
            <div id="modal">
                입력된 이름은 <span>{user.name}</span>이고 입력된 이메일은 <span>{user.email}</span>
            </div>
        </div>
    );
}

export default InputTest1;