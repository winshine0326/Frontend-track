export default function CallbackTest(){
    function 실행함수(x,콜백함수){
        let result = x+x;
        console.log(result);
        콜백함수(result);
    }

    실행함수(2,(result)=>{
        실행함수(result,(result)=>{
            실행함수(result,(result)=>{
                console.log('종료')
            })
        })
    })
    
    return <div>Callback test</div>;
}