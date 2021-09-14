import "../assets/Form.css"

const Input = (props) => {
    return (

        <form className="names-form">
            <label className="form-box">
                <p>{props.label}</p>
                <input type="text" value={props.value} onChange={props.updateName} name="firstname" className="input-form" />
            </label>
        </form>
    );
}

export default Input;