export default function CardTemp({label, value, img,style}) {
    return(
      <div>
        {img?
        <div className={style}>
          <img src={img} alt='imagen label'/>
          <label >{label}</label>
          <span>{value}</span>
        </div>
        :
        <div className={style}>
          <label >{label}</label>
          <span>{value}</span>
        </div>
        }
      </div>   
    )  
  }