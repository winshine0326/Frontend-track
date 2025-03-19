import './Maptest3.css';

function getImageUrl(imageId, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

const MapTest3 = () => {
    const people = [
        {
            id: 0,
            name: '크레올라 캐서린 존슨',
            profession: '수학자',
            accomplishment: '우주비행 계산',
            imageId: 'MK3eW3A',
        },
        {
            id: 1,
            name: '마리오 호세 몰리나-파스켈 헨리케스',
            profession: '화학자',
            accomplishment: '북극 오존 홀 발견',
            imageId: 'mynHUSa',
        },
        {
            id: 2,
            name: '모하메드 압두스 살람',
            profession: '물리학자',
            accomplishment: '전자기학 이론',
            imageId: 'bE7W1ji',
        },
        {
            id: 3,
            name: '퍼시 레이본 줄리언',
            profession: '화학자',
            accomplishment: '코르티손 약물, 스테로이드 및 피임약 개발',
            imageId: 'IOjWm71',
        },
        {
            id: 4,
            name: '수브라흐마니안 찬드라세카르',
            profession: '천체물리학자',
            accomplishment: '백색 왜성의 질량 계산',
            imageId: 'lrWQx8l',
        },
    ];
    return (
        <div>
            <h1>Scientists</h1>
            <ul>
                {people.map((item) => {
                    return(
                        <li className='card'>
                            <img src={getImageUrl(item.imageId)}/>
                            <p><b>{item.name}</b>:{item.profession} known from {item.accomplishment}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MapTest3;