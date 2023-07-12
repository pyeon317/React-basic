import { useState } from "react";



function EventComponent2(){

  //state 여러개를 객체로 관리하기
  const [form,setForm] = useState( {name:'',
                                    topic:''
                                  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    const copy = {...form, [e.target.name] : e.target.value }//객체 복사
    // const copy = {...form};//객체복사
    // copy[e.target.name] = e.target.value;//값 업데이트

    console.log(copy);
    setForm(copy);
  }

  const handleClick = () => {
    alert(`${form.name}님의 할일목록${form.topic}`);
    setForm({name: '', topic: ''});
  }

  const handleKeyUp = (e) => {
    if(e.key === 'Enter'){
      handleClick();
    }
  }

  return (
<div>

<h3>리액트의 이벤트 핸들링(인풋 태그의 change)</h3>
<input type="text" name="name" onChange={handleChange} value={form.name}/>
변경된 값: {form.name}
<br/>

<h3>리액트 이벤트(keyup) </h3>
<input type="text"name="topic" onChange={handleChange} onKeyUp={handleKeyUp} value={form.topic}/>

변경된 값 : {form.topic}
<br/>

<h3>리액트 이벤트(click) </h3>
<button onClick={handleClick}>클릭me</button>


</div>

  );
}

export default EventComponent2;