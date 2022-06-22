export default function CardTemp({label, value, img}) {
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