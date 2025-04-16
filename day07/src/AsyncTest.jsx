import { useEffect, useState } from 'react';
export default function PromiseTest(){
    const [error,setError] = useState(null);

    const increase = (number) =>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const result = number+10;
                if (result > 50){
                    const e = new Error("50보다 큰 수입니다.");
                    setError(e.message);
                    return reject(e);
                }
                resolve(result);
            },1000)
        })
    }

    const runTask = async()=>{
        try{
            let result = 0;
            for (let i = 0; i<6; i++){
                result = await increase(result);
                console.log(result);
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        runTask();
    },[])

    return (
        <div>
            <h1>Promise 객체 test (async/await)</h1>
            {error && <p style={{color:'red'}}>에러발생 : {error}</p>}
        </div>
    )
}