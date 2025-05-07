import Card from "./components/Card";
import Rooms from "./Rooms";

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

export default function CardList() {
    return (
        <div>
            <h2>your result is here!</h2>
            {
                Rooms.map((room: Room) => (
                    <div className="container">
                        <div className="box image">
                            <img src={room.image} className="boximage" alt="Room" />
                        </div>
                        <div className="box">
                            <div className="location">{room.location}에 위치</div>
                            <div className="title">{room.name}</div>
                            <hr />
                            <div className="guest">최대인원{room.totalGuest} 명</div>
                            <div className="rating">
                                평점: {room.rating}{" "}
                                <span className="visits">({room.totalGuest})</span>
                            </div>
                            <div className="price">
                                {room.price} 원<span className="month">/ month</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}