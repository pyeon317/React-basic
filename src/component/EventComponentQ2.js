import { useState } from "react";

const EventComponentQ2 =() => {

  // const [data,setData] = useState( {write : '', write2 : ''} );
  // const [btn,setbtn] = useState(data.write);
  
  // const handleChange = (e) => {
  //   if(e.key === 'Enter'){
  //     setData(e.target.value);
  //     setbtn(e.target.value);
  //     e.target.value = "";
  //   }
  // }
  const [data,setData] = useState( {data : '', result : ''} );

  
  const handleChange = (e) =>{
    setData( {data: e.target.value, result: data.result} );
  }

  const handleClick = (e) => {
    setData( {data:'', result: data.data} )
  }


  return(
    <div>
      <h3>인풋데이터 핸들링(실습)</h3>
      클릭시 데이터는 공백으로, 결과는 인풋이 입력한 값으로 처리<br/>
      힌트는? 아마도 state는 두개가 필요할 듯?<br/>

      <input type="text" onChange={handleChange} value={data.data}></input>
      <button onClick={handleClick}>추가하기</button>

      <h3>결과</h3>
      <p>{data.result}</p>



    </div>





  )
};

export default EventComponentQ2;