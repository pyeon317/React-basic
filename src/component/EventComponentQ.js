import { useState } from "react";

function EventComponentQ () {

  const [data, setData] = useState('메뉴를 선택하세요');

  const handlechange = (e) => {
    //console.log(e.target.value);
    setData(e.target.value);

  };


  return (
    <div>

      <h3>셀렉트 태그 연습</h3>
      셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력<br />
      <select onChange={handlechange}>
        <option>햄버거</option><br />
        <option>치킨</option><br />
        <option>피자</option><br />
      </select>

      <h3>선택한 결과</h3>
      <p>{data}</p>





    </div>

  );
}


export default EventComponentQ;