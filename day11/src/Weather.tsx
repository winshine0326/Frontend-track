//QueryPre.jsx
import { useEffect, useState } from 'react';

// delay 초 동안 처리를 일시 정지하는 sleep 함수
const sleep = (delay: any) => new Promise(resolve => setTimeout(resolve, delay));
const API_KEY = '654b3a2bb231e6c2599bb414ddfd206d'


// 날씨 정보를 얻기 위한 함수
const fetchWeather = async () => {
    // 처리 지연을 위한 더미 휴지 처리
    await sleep(2000);

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`)
    if (res.ok) {
        return res.json();
    } else {
        throw new Error(res.statusText);
    }
};

export default function QueryPre({ }) {
    // 날씨 정보(info), loading(로딩 중인가?), error(오류 정보) 준비 error(오류 정보) 준비
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // 컴포넌트 실행 시 날씨 정보 획득
    useEffect(() => {
        setLoading(true);
        fetchWeather()
            // 성공 시 정보 업데이트
            .then((result) => {
                setData(result);
                console.log(result);
            })
            // 실패 시 error 업데이트
            .catch((err) => setError(err))
            // 성공 여부와 상관없이 isLoading 업데이트
            .finally(() => setLoading(false));
    }, []);

    // 로딩 중이라면 로딩 메시지 표시
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // 통신 오류 발생 시 오류 메시지 표시
    if (error) {
        return <p>Error: {error}</p>;
    }

    // 로딩 중이거나 오류가 아닌 경우 결과 표시
    return (
        <figure className="weather-card">
            <img
                src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                alt={data?.weather?.[0]?.main}
            />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
            <ul>
                <li>
                    <strong>지역 :</strong> {data?.name}
                </li>
                <li>
                    <strong>온도 :</strong> {Math.round(data?.main.temp-273.15)}℃
                </li>
                <li>
                    <strong>습도 :</strong> {data?.main.humidity}%
                </li>
                <li>
                    <strong>풍속 :</strong> {data?.wind.speed} m/s
                </li>
            </ul>
        </figure>
    );
}