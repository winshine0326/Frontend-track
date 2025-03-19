import React from "react";

let user = { name: "soma", age: 20 };
let { name, age } = user;
const cars = ["Ford", "BMW", "Audi"];
let foo = ["one", "two", "three"];

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function MapTest1() {
  return (
    <>
      <h1>foo 배열 출력하기</h1>
      <ul>
        {foo.map((item)=><li>{item}</li>)}
      </ul>
      <h1>차고에 있는 차 목록</h1>
      <ul>
        {cars.map((item)=><Car brand={item}/>)}
      </ul>
    </>
  );
}
export default MapTest1;