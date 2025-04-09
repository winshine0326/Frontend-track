import { useRef, useState } from "react";
import "./UserAdd.css";

const User = ({ item, onRemove,onToggle, onModify }) => { // props로 객체 받기
    const { id, name, email } = item;
    return (
        <div>
            <span onClick={()=>onToggle(id,item)}>{name}</span>
            <span>{email}</span>
            <button onClick={() => { onRemove(id) }}>삭제</button>
            <button onClick={() => { onRemove(id) }}>수정</button>
        </div>
    );
};

export default function UserAdd() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
    });

    const [users, setUsers] = useState([
        { 
            id: 1,
            name: '강민지',
            email: 'strongminji@gmail.com',
            selected : false,
        },
        { 
            id: 2,
            name: '정소울',
            email: 'soulright@bssm.hs.kr',
            selected : false,
        },
        { 
            id: 3,
            name: '이승현',
            email: 'victorynow@example.com' ,
            selected : false,
        }
    ]);

    const { name, email } = inputs;
    const nextId = useRef(4);2

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onCreate = () => {
        const user1 = {
            id: nextId.current,
            name,
            email
        };
        setUsers([...users, user1]);
        setInputs({ name: "", email: "" });
        nextId.current += 1;
    };

    const onRemove = (id) => {
        const removedUser = users.filter(user => user.id !== id);
        setUsers(removedUser);
    }

    const onToggle = (id,user)=>{ //2. 1)이름 클릭하면 selected속성 반전 2) input에 현재값 반영하기
        setUsers(
            users.map((item) => {
              item.id == id ? item.selected = !item.selected : user;
            })
           //users.map(id가 같으면 ? 수정
           //{selected : 원래 값 반전}: 수정안함 user를 리턴}
        )
        setInputs({
          //현재 user의 이름과 이메일을 input에 보여줌.
          name : user.name,
          email : user.email
        })
      }

      const onModify = (user,id)=>{ //3.   1)수정 버튼 누르면 input의 값으로 user수정하기 2) input clear
        setUsers(
            users.map((item)=>{
                item.map
            })
             //users.map(id가 같으면 ? 수정
          //{ }: 수정안함 user를 리턴}
         )
         setInputs({
          //input값 초기화
         })}

    return (
        <div>
            <input name="name" onChange={onChange} value={name} placeholder="이름을 입력" />
            <input name="email" onChange={onChange} value={email} placeholder="이메일을 입력" />
            <button onClick={onCreate}>등록</button>
            {users.map((item) => (
                <User key={item.id} item={item} onRemove={onRemove} onToggle={onToggle} onModify={onModify}/>
            ))}
        </div>
    );
}
