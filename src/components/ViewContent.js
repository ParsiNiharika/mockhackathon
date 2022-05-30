import {useLocation} from "react-router-dom"
import {useEffect} from "react"
function ViewContent() {
    let location=useLocation()
    useEffect(()=>{

        if(location.state.data){
            console.log(location.state.data)
        }
    },[location.state.data])
    return ( 
        <h1></h1>
     );
}

export default ViewContent;