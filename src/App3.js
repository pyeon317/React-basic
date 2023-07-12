import StateComponent from "./component/StateComponent";
import StateComponent2 from "./component/StateComponent2";
import StateComponentQ from "./component/StateComponentQ";

function App() {

  return (
    <>
    <StateComponent/>
    
    <hr/>

    <StateComponent2 age={20}/>

    <hr/>

    <StateComponentQ />
    
    
    
    </>

  )
}


export default App;