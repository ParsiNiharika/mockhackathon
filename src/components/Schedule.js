import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
function Schedule({day}) {
const [Monday,setMonday]=useState([])
const [Tuesday,setTuesday]=useState([])
const [Wednesday,setWednesday]=useState([])
const [Thursday,setThursday]=useState([])
const [Friday,setFriday]=useState([])
const [Saturday,setSaturday]=useState([])

const user={mail:'sample@gmail.com'}
    fetch('http://localhost:3000/admin/getcontent',{

method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify(user)

    })
   .then(res=>{

    return res.json()
   })
   .then(data=>{
       console.log(data)
const userObj=data.teacherObj
setMonday(userObj.Monday)
setTuesday(userObj.Tuesday)
setWednesday(userObj.Wednesday)
setThursday(userObj.Thursday)
setFriday(userObj.Friday)
setSaturday(userObj.Saturday)

   }


)


   
        let navigate=useNavigate()
        
    return ( 
        <div>
            <h1 className="text-center">{day} Schedule</h1>
            {(day=="Monday") && Monday.map((element)=>
                <div class="card w-50 mx-auto mb-4">
                    <div class="card-header ">{element["time"]}</div>
                    <div class="card-body">
                        <h4 class="card-title">{element["class"]}</h4>
                        <p class="card-text">{element["subject"]}</p>
                        <a href="#" class="btn btn-primary" onClick={()=>{navigate('/ViewContent',{state:{data:element["content"]}})}}>View Context</a>
                    </div>
                </div >)}

             {(day=="Tuesday") && Tuesday.map((element)=>
                <div class="card w-50 mx-auto mb-4">
                    <div class="card-header ">{element["time"]}</div>
                    <div class="card-body">
                        <h4 class="card-title">{element["class"]}</h4>
                        <p class="card-text">{element["subject"]}</p>
                        <a href="#" class="btn btn-primary">View Context</a>
                    </div>
                </div >)} 

                {(day=="Wednesday") && Wednesday.map((element)=>
                <div class="card w-50 mx-auto mb-4">
                    <div class="card-header ">{element["time"]}</div>
                    <div class="card-body">
                        <h4 class="card-title">{element["class"]}</h4>
                        <p class="card-text">{element["subject"]}</p>
                        <a href="#" class="btn btn-primary">View Context</a>
                    </div>
                </div >)}

                {(day=="Thursday") && Thursday.map((element)=>
                <div class="card w-50 mx-auto mb-4">
                    <div class="card-header ">{element["time"]}</div>
                    <div class="card-body">
                        <h4 class="card-title">{element["class"]}</h4>
                        <p class="card-text">{element["subject"]}</p>
                        <a href="#" class="btn btn-primary">View Context</a>
                    </div>
                </div >)}

                {(day=="Friday") && Friday.map((element)=>
                <div class="card w-50 mx-auto mb-4">
                    <div class="card-header ">{element["time"]}</div>
                    <div class="card-body">
                        <h4 class="card-title">{element["class"]}</h4>
                        <p class="card-text">{element["subject"]}</p>
                        <a href="#" class="btn btn-primary">View Context</a>
                    </div>
                </div >)}

                {(day=="Saturday") && Saturday.map((element)=>
                <div class="card w-50 mx-auto mb-4">
                    <div class="card-header ">{element["time"]}</div>
                    <div class="card-body">
                        <h4 class="card-title">{element["class"]}</h4>
                        <p class="card-text">{element["subject"]}</p>
                        <a href="#" class="btn btn-primary">View Context</a>
                    </div>
                </div >)}
            
        </div>
     );
}

export default Schedule;