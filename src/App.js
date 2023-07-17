import { Fragment } from "react";
import './css/App.css';
import x from './css/App.module.css';



function App() {

  console.log(x);

  return(
    <Fragment>
      <header className="app_header">
        <p style={ {color : 'red', textAlign : 'center'} }>안녕하세요~</p>
      </header>

      <section className={x.wrap}>
        <div className={x.item}>
          <p className="inner">CSS모듈</p>
          <input type="text" className="input-control"/>
        </div>
      </section>



    </Fragment>


  )
}

export default App;