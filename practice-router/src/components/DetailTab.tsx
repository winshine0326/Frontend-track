//<DetailTab.jsx>  
import React, { useState } from "react";
import "../styles.css";
import { useParams } from "react-router-dom";
import Rooms from "../Rooms.js";
import { Nav } from 'react-bootstrap';


//1. react-bootstrap import
export default function DetailTab() {
    let { id } = useParams(); //useParams()를 이용하여 파라미터로 id 받기
    console.log(id);
    let room = Rooms.filter((item) => item.key == id); //rooms의 key값과 id값이 일치하는 값 저장
    let result = room[0]; //배열의 첫번째 값을 room에 저장
    // let result = Rooms[id];

    const [tab, setTab] = useState(0);

    console.log(result.name);


    //3. 탭변경 state변수 tab저장하기
    return (
        <main>
            <div className="container">
                <div className="box image">
                    <img src={result.image} className="boximage" alt="Room" />
                </div>
                <div className="box">
                    <div className="location">{result.name} </div>
                    <div className="location">{result.location}에 위치</div>
                    <div className="title">{result.title}</div>
                    <hr />
                    <div className="guest">최대인원{result.totalGuest} 명</div>
                    <div className="rating">
                        평점: {result.rating}{" "}
                        <span className="visits">({result.numberOfRating})</span>
                    </div>
                    <div className="price">
                        {result.price} 원<span className="month">/ month</span>
                    </div>
                </div>
            </div>
            {/* 2. 리액트부트스트랩에서 탭모양 Nav 복사해서 붙여넣기
       탭을 클릭하면 탭번호 변경하기  */}


            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => setTab(0)}>
                        상세정보
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => setTab(1)}>
                        리뷰
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => setTab(2)} disabled>
                        상품Q&A
                    </Nav.Link>
                </Nav.Item>
            </Nav>



            <div>
                {tab == 0 &&
                    <div>
                        <p>
                            5~9층에 위치한 스탠다드룸은 편안함과 쾌적함이 인상적이 휴식 환경을
                            제공합니다.
                        </p>
                        <p>
                            모던한 아름다움과 신라호텔 수준의 고급 침구 및 침대 그리고 고급
                            어메니티로 한 단계 업그레이드 된 휴식을 경험하십시오.
                        </p>
                        <br /> 위치 :5~9층
                        <br />
                        룸구성 : 침실 1, 욕실 1
                        <br />
                        문의전화 : 02-2230-0700
                    </div>
                }
                {tab == 1 &&
                    <div>내용1</div>

                }
                {tab == 2 &&
                    <div>내용2</div>
                }
            </div>
        </main>
    );
}

