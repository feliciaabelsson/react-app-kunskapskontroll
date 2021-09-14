import "../assets/Form.css"

const Submit = (props) => {
  
    return ( 
        <section className="button-container">
            <input type="submit" value="Send" onClick={props.onSubmit} className="submit-button"/>
        </section>
    );
}
 
export default Submit;