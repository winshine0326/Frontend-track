
const PromiseTest = () => {
    const increase = (number) => {
        const promise = new Promise((resolve, reject) => {
            //resolve 해결조건, reject는 실패
            setTimeout(() => {
                const result = number + 10;
                if (result > 50) {
                    const e = new Error("50보다 큰 수 입니다.");
                    return reject(e);
                }
                resolve(result); // 10,20,30,40
            }, 2000)
        }
        )
        return promise;
    };

    console.log("promise 실행");

    increase(0)
        .then((number)=>{
            console.log(number);
            return increase(number);
        })
        .then((number)=>{
            console.log(number);
            return increase(number);
        })
        .then((number)=>{
            console.log(number);
            return increase(number);
        })
        .then((number)=>{
            console.log(number);
            return increase(number);
        })
        .catch((e)=>{console.log(e)} )


    return <div><h1>Promise 객체 test</h1></div>
}

export default PromiseTest;