import axios from "axios"
function AxiosTest(){
 const axiosGet = () => {
   axios.get("http://localhost:4000/test")
   .then((res) => {
     console.log(res);
   })
   .catch((err) => {
     console.log(err);
   })
 }
 const axiosPost = () => {
   axios.post("http://localhost:4000/test",{
     name:"추가!",
     desc:"Post"
   })
   .then((res) => {

     console.log(res);

   })

   .catch((err) => {

     console.log(err);

   })

 }

 const axiosPut = () => { // ⚠️ id가 없는 경우 error

   axios.put("http://localhost:4000/test/4")

   .then((res) => {
     console.log(res);
   })
   .catch((err) => {
     console.log(err);
   })

 }

 const axiosDelete = () => {  // ⚠️ id가 없는 경우 error
   axios.delete("http://localhost:4000/test/1")
   .then((res) => {
     console.log(res);
   })
   .catch((err) => {
     console.log(err);
   })
 }

 return (
   <>
     <button type="button" onClick={() => axiosGet()}>확인</button>
     <hr />
     <button type="button" onClick={() => axiosPost()}>추가</button>
     <hr />
     <button type="button" onClick={() => axiosPut()}>ID 4 변경하기</button>
     <hr />
     <button type="button" onClick={() => axiosDelete()}>ID 5 삭제하기</button>
   </>

 )

}

export default AxiosTest;