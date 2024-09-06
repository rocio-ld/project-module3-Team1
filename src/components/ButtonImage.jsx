


function ButtonImage(props){
    return(
        <>
        <label htmlFor="image" className="button"> {props.text}</label>
        <input className="addForm__hidden" type="file" name="image" id="image"/>
        </>
        
        
    )
}
 export default ButtonImage;