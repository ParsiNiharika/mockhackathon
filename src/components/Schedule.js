import {useNavigate} from 'react-router-dom'

function Schedule({day}) {

    let Monday=[{"time":"10am-11am",class:"Class6",subject:"Math",content:"abc"},{"time":"11am-12am",class:"Class7",subject:"Hindi"}]
    let Tuesday=[{"time":"11am-12am",class:"Class7",subject:"Hindi"}]
    let Wednesday=[{"time":"11am-12am",class:"Class7",subject:"Hindi"}]
   let Thrusday=[{"time":"11am-12am",class:"Class7",subject:"Hindi"}]
    let Friday=[{"time":"11am-12am",class:"Class7",subject:"Hindi"}]
    let Saturday=[{"time":"11am-12am",class:"Class7",subject:"Hindi"}]
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

                {(day=="Thrusday") && Thrusday.map((element)=>
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