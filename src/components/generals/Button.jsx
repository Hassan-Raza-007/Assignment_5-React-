
const Button_Cmponent = (props) => {
    console.log(props)
    return (
        <div>
            <button className="btn">{props.label}</button>
            
        </div>
    )
}
export { Button_Cmponent }