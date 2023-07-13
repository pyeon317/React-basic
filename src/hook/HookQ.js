import { useEffect, useRef, useState } from "react";


function HookQ() {

  //useRef
  const idtag = useRef(null);
  const pwtag = useRef(null);

  //input 태그 핸들링
  const[form,setForm] = useState( {id:'', pw:''} )


  
  const handleChange = (e) => {
    const copy = {...form, [e.target.name] : e.target.value};
    setForm(copy);
  }


  const handleClick = () => {
    console.log(idtag.current.value);
    console.log(pwtag.current.value);
    console.log(form);
    
    if(form.id === ''){
      alert('아이디를 입력하세요');
      idtag.current.focus();
      return;
    }
    else if(form.pw === ''){
      alert('비밀번호를 입력하세요');
      pwtag.current.focus();
      return;
    }
    
      alert(`id : ${form.id} pw : ${form.pw}`);
      

  }

  //첫 마운트에 포커싱
  useEffect( () =>{
    idtag.current.focus();
    
  }, [])


  return (
    <div>

      <input type="text"     placeholder="아이디"   ref={idtag} onChange={handleChange} name="id" value={form.id}></input><br/>
      <input type="password" placeholder="비밀번호" ref={pwtag} onChange={handleChange} name="pw" value={form.pw}></input>
      <button onClick={handleClick}>로그인</button>

    </div>

  )
}

export default HookQ;