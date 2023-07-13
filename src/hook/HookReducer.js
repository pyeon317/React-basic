import { useReducer } from "react";

//1. 리듀서 함수 (state값, 리듀서 실행함수로 전달하는 상태값)
const myReducer = (state, action) => {

  console.log(state);
  console.log(action);

  //action에 따라서 상태를 변경하고 return state반환
  if(action.x === 'increase') {
    state = {value : state.value + 1};//객체불변성을 위해 state를 가져와 덮어씌우는 형태 - 라서 state.value 로 가져오기 +1 을 함
  }else if(action.x === 'decrease') {
    state = {value : state.value - 1};
  }else if(action.x === 'reset'){
    state = {value : 0};
  }
  return state;
}

function HookReducer() {
  
  //2.const[현재state, 리듀서 실행함수] = 리듀서 훅 (리듀서함수명, state초기값)
  const [state, func] = useReducer(myReducer, {value: 0})

  const handleClick = () => {
    //리듀서 함수를 실행
    func({x:'increase'});
  }

  

  return (

    <div>
      
      
        <h3>카운트: {state.value}</h3>

        <button onClick={handleClick}>증가</button>{/*  */}
        <button onClick={()=>func({x:'decrease'})}>감소</button>
        <button onClick={()=>func({x:'reset'})}>초기화</button>
      
    </div>

  );

}

export default HookReducer;
