import React, { useState, useRef, useEffect } from "react";


function Modal(){
    useEffect(()=>{
        return ()=>{
            alert("Modal 컴포넌트 언마운트");
        }
    },[])
    return <div style={{height:"20%",width:"70%", background:"lightcyan",padding:"20px"}}>
        useEffect 실습입니다.
    </div>
}

export default function UseEffect1() {
    const [inputs,setInputs] = useState({name:'',nickname:''});
    const [depname,setDepname] = useState('');
    const [modal,setModal] = useState(true);
    
    const onChange = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        console.log("마운트 될 때 실행");
        setTimeout(()=>{
            
            setModal(false);
        },3000);
    },[])

    useEffect(()=>{
        console.log(`effect 함수 -변경 후 이름 : ${depname}`); //2. 의존성배열 변경시
        return ()=>{
            console.log(`effect 함수 -변경 전 이름 : ${depname}`); //1.clean up 함수
        }
    },[depname])

    return (
        <div>
            <div>
                <input name="name" onChange={onChange}/>
                <input name="nickname" onChange={onChange} />
                <button onClick={() => setDepname(inputs.name)}>이름 출력</button>
            </div>

            <div>
                <div>
                    <b>이름:</b> {inputs.name}
                </div>
                <div>
                    <b>닉네임:</b> {inputs.nickname}
                </div>
                {
                    modal ? <Modal/> : null
                }
            </div>
        </div>
    );
}