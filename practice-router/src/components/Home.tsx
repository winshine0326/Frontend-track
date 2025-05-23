import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Router from "../Router";
import { useState } from "react";
import Rooms from "../Rooms";

interface Room {
    key: number;
    name: string;
    location: string;
    totalGuest: string;
    rating: string;
    numberOfRating: string;
    price: string;
    image: string;
}

export default function Home() {
    const [rooms, setRooms] = useState<Room[]>(Rooms);
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <Router />
            <div id="wrapper">
                {
                    rooms.map((room) => {
                        return (
                            <>  
                                <div className="box">
                                    <img src={room.image} className="boximage" onClick={() => { navigate(`/detail/${room.key}`); }}></img>
                                    <p className="title">{room.name}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}