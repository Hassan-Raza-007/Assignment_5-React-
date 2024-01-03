
const Text_for_Heading = (props)=>{
    // console.log(props.label)
return(
    <div>
<h1 className="discount_font_style">{props.label}</h1>
    </div>
)
}

const Text_for_Heading_two = (props)=>{
  return (
    <div>
        <h1 style={{textAlign:"center"}}>{props.label}</h1>
    </div>
  )  
}

const Text_for_para = (props)=>{
    return(
        <div>
            <p style={{textAlign:"center"}}>{props.label}</p>
        </div>
    )
}
export  {Text_for_Heading, Text_for_Heading_two, Text_for_para}