import React from "react";
import { useNavigate } from 'react-router-dom';

const NoPage = ()=>{
    const navigate = useNavigate();
    return (
        <div>
            <h1>404 Not Found</h1>
            <button onClick={()=>navigate("/home")}>홈으로</button>
            <button onClick={()=>navigate(-1)}>뒤로가기</button>
            <button onClick={()=>navigate("/blog")}>블로그로</button>
        </div>
    )
}

export default NoPage;