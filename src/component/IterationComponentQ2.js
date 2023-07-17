import { useState } from "react";


const IterationComponentQ2 = () => {
    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    const sel = select.map( item => <option>{item}</option>)
    
    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java',       teacher: '이순신'},
        {id: 2, type: 'Java',       teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle',     teacher: '이순신'},
        {id: 5, type: 'Mysql',      teacher: '이순신'},
        {id: 6, type: 'CSS',        teacher: '박찬호'},
        {id: 7, type: 'HTML',       teacher: 'coding404'},
    ];

    const [list, setList] = useState(data);
    const newlist = list.map( item => <li key={item.id}>type : {item.type}, teacher : {item.teacher}</li> )
    const [search, setSearch] = useState('');//input값

    //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
    const handleChange = (e) => {
      console.log(e.target.value);
      const newlist = data.filter(item => item.type === e.target.value)
      setList(newlist);
      //newlist에서 필터를 하면 그다음에 남은 값이 필터링되고 남은 것 뿐이라서 그 이후부터는 검색을 해도 나오는게 없음
    }

	  //4 - 검색기능 (input태그의 값이 변경되면 핸들링)
    const handleClick = () => {

      let newlist =data.filter( item => { item.type.toLowerCase().includes(search) ||
                             item.teacher.includes(search) 
        // return item.type.toLowerCase().includes(search) ||
        //        item.teacher.includes(search) 
        
                    });
    }



    return (
        <div>
			    <hr/>
            <h3>실습</h3>
            Search: <input type="text" onChange={ e => setSearch(e.target.value) } value ={search}/>
            <button onClick={handleClick}>검색</button>

            <br/>
            
			과목찾기:
            <select onChange={handleChange}>
                {sel}
            </select>
            <ul>
               {newlist}
            </ul>
        </div>
    )
}

export default IterationComponentQ2;