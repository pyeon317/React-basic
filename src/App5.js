import { Fragment } from "react";
import IterationComponent from "./component/IterationComponent";
import IterationComponent2 from "./component/IterationComponent2";
import IterationComponentQ from "./component/IterationComponentQ";
import IterationComponentQ2 from "./component/IterationComponentQ2";

function App () {

  return(

    <Fragment>
    <IterationComponent/>

    <br/>

    <IterationComponent2/>
    <br/>

    <IterationComponentQ/>
    <br/>

    <IterationComponentQ2/>

    </Fragment>
  )


}

export default App;