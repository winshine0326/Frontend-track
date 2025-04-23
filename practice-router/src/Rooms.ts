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
  
  const Rooms: Room[] = [
    {
      key: 1,
      name: "OLIVE Serviced 아파트",
      location: "Salt Lake",
      totalGuest: "4",
      rating: "4.76",
      numberOfRating: "5",
      price: "30,498",
      image:
        "https://a0.muscache.com/im/pictures/a034f6f6-61e7-4cf6-9d90-777587ea0b26.jpg?aki_policy=large",
    },
    {
      key: 2,
      name: "Oyo Rooms,완벽한 룸 스테이",
      location: "Kolkata",
      totalGuest: "7",
      rating: "4.96",
      numberOfRating: "35",
      price: "60,498",
      image:
        "https://a0.muscache.com/im/pictures/1d9601a7-84d7-4bf5-9fda-6d158e65eed9.jpg?aki_policy=large",
    },
    {
      key: 3,
      name: "Secured Home Manzile",
      location: "Howrah",
      totalGuest: "34",
      rating: "3.76",
      numberOfRating: "25",
      price: "20,498",
      image:
        "https://a0.muscache.com/im/pictures/a034f6f6-61e7-4cf6-9d90-777587ea0b26.jpg?aki_policy=large",
    },
  ];
  
  export default Rooms; 