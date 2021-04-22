import Output from './Output'
import {useEffect, useState} from 'react'
function Input(props){
        console.log(props)
    const [mard, setMard] = useState({name:"", surname:"", image:""})
    // const [skill, setSkill] = useState("")

    return <div className="col-md-6">
        <label>Name</label><br></br>
        <input type="text"
               value={mard.name}
               onChange={(e)=>setMard({...mard, name:e.target.value})}
        /><br></br>
        <label>Surname</label><br></br>
        <input type="text"
               value={mard.surname}
               onChange={(e)=>setMard({...mard, surname:e.target.value})}
        /><br></br>
        <label>Image</label><br></br>
        <input type=""
               value={mard.image}
               onChange={(e)=>setMard({...mard, image:e.target.value})}
        /><br></br>
        <button onClick={()=>props.addSkills()} className="btn btn-warning btn-sm">Add Skills</button><br></br>
            {
                props.skills.map((elm, i) =>{
                    return ((
                        <div key={i}>
                          <label>skills {i+1}</label>
                          <br/>
                          <input key={i} onChange={(e)=>props.skillValue(e.target.value,i)} />
                        </div>))
                })
            }
        <br></br><button onClick={()=>props.addPerson(mard)} className="btn btn-success btn-sm">Update</button>
        {/* <Output mard = {mard} /> */}
    </div>
}
export default Input
