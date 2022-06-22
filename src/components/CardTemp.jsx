export default function CardTemp({label, value}) {
    return(
      <div>
        {img?
        <div>
          <img src={img}/>
          <label >{label}</label>
          <span>{value}</span>
        </div>
        :
        <div>
          <label >{label}</label>
          <span>{value}</span>
        </div>
        }
      </div>   
    )  
  }