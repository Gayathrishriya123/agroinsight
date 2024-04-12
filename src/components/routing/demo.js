//Routing
//step-1-install react-router-dom
//create browser router object
//import { createBrowserRouter,RouterProvider } from "react-router-dom";
//import RootLayout from "../../RootLayout";
//import Register from "./Register";
//import Agridetails from "./Agridetails";

import { useEffect } from "react"

//hooks-useEffect
function demo(){
    let [counter1,setCounter1]=useState[0]
    let [counter2,setCounter2]=useState[0]

    useEffect(()=>{
        console.log('hello')
    },[])
    return(
        <div>
        <h1>Counter1</h1>
        <button className="btn btn-primary" onClick={setCounter1(counter1+1)}>Change</button>
        <h1>Counter2</h1>
        <button className="btn btn-primary" onClick={setCounter2(counter2+1)}>Change</button>
        </div>
    )
    
    
   

}
export default demo;