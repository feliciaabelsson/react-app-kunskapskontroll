import React from "react";
import "../assets/Form.css";

const Checkbox = (props) => {
        return (
            <form className="checkbox-form">
                <label className="checkbox-box">
                    <input type="radio" value={props.value} onChange={props.updateClass} checked={props.checked} />
                    <p>{props.label}</p>
                </label>
            </form>
        )
}

export default Checkbox;