function Output(props){
    console.log(props.mard)
    if(props.mard[0].image === ""){
        return <div className="col-md-6">
            <img />
            <h1>
                {props.mard[0].name + " "} 
                {props.mard[0].surname}
            </h1>
            <ul >
                {
                    props.skills.map((elm, i)=>{
                        if(elm!="")
                        return <li key={i}>{elm}</li>
                    })
                }
            </ul>
        </div>
    }else{
    return <div className="col-md-6">
        <img className="nkar" src={props.mard[0].image} />
        <h1>
            {props.mard[0].name + " "} 
            {props.mard[0].surname}
        </h1>
        <ul >
                {
                    props.skills.map((elm, i)=>{
                        if(elm!="")
                        return <li key={i}>{elm}</li>
                    })
                }
            </ul>
    </div>
    }
}
export default Output