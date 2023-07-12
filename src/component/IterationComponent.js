import React from "react";

function IterationComponent() {

  const arr = [1,2,3,4,5];

  // const result =arr.map( (val,idx,ar)  => {
  //   console.log(val)
  //   console.log(idx)
  //   console.log(ar)
  //   return val*10;
  // })

  //
  // const result = arr.map(val => val*10 );
  // console.log(result);

  //map을 이용해서 태그생성
  //key는 컴포넌트 반복시에 고유하게 지정해야하는 값입니다. (권고사항)
  // const result = arr.map( (item,index) ) => {
  //   return <li></li>
  // }
  const result = arr.map( (item,index)  => <li key={index}>{item}</li> )

  console.log(result);
  
  const list = [{id: 1, title: 'aaa123'},
                {id: 2, title: 'bbb123'},
                {id: 3, title: 'ccc123'}
                ];
  const result2 = list.map( (item,index) => <option key={item.id}>{item.title}</option> ) 

  return(
    <div>
      <h3>컴포넌트 반복</h3>
      
      <ul>
        {result}
      </ul>

      <h3>컴포넌트 반복으로 값을 넣어주세요</h3>
      <select>
        {result2}
      </select>




    </div>


  )
}

export default IterationComponent