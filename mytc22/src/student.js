function Student(props){
    return(
        <div className="app-student card row-3" style={{width:'18rem'}} onClick={()=>props.onAlert(props.id,props.name,props.course,props.Src)}>
            <img src={props.Src} className='card-img-top' alt='student img'></img>
            <div className="card-body">
               <h2>{props.name}</h2>
            <p>a student for: {props.course}</p>
            <a className="App-link" 
            href={props.href}>
                for full informaition
            </a> 
            </div>
        </div>
    )
}
export default Student