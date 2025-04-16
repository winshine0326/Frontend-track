import React, { useState } from "react";
import axios from "axios";
//npm install axios

export default function AxiosTest() {
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const [photos, setPhotos] = useState([]);
    /*
     getPromise ,getAsync,getPhotos 함수를 작성하시오.
  */
    const getPromise = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments/1")
            .then((response) => {
                console.log(response.data)
                setData(response.data);
                setData2(null);
                setPhotos([]);
            })
            .catch(() => { console.log("get error") });
    }
    const getAsync = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => {
                console.log(response.data);
                setData(null);
                setData2(response.data);
                setPhotos([]);
            })
            .catch(() => { console.log("get error") });
    }
    async function getPhotos(){
        const photos = await axios.get("https://jsonplaceholder.typicode.com/photos");
        console.log(photos.data)
        setData(null);
        setData2(null);
        setPhotos(photos.data.filter((item) => item.id < 10));
    }

    return (
        <div>
            <h3>Axios 테스트해보기</h3>
            <button onClick={getPromise}>Promise로 불러오기</button>
            <p />
            <button onClick={getAsync}>async/await로 불러오기</button>
            <p />
            <button onClick={getPhotos}>async/await로 사진 불러오기</button>
            {data && <p>{data.name}</p>}
            {data2 && <p>{data2.userId}</p>}
            {photos && <img src={photos[0]}></img>}
        </div>
    );
}

