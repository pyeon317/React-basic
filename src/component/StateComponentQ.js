import React, { useState } from "react";


function StateComponentQ () {

  const [cnt,setcnt] = useState(0);

  return(
    <div>

      <h3>실습</h3>
      <h3>카운트:{cnt}</h3>

      <button onClick={ () => setcnt(cnt+1) }>증가</button>
      <button onClick={ () => setcnt(cnt-1) }>감소</button>
      <button onClick={ () => setcnt(0) }>초기화</button>


    </div>
  )
}

export default StateComponentQ;