import React from "react";
import "../assets/Form.css";

const Selection = (props) => {

        return(
            <form className="selection-form">
                 <section className="selection-box">
                    <p>{props.label}</p>
                    <select className="selection select-people" onChange={props.updateSelection}>
                        <option>{props.opt1}</option>
                        <option>{props.opt2}</option>
                        <option>{props.opt3}</option>
                        
                    </select>
                </section>
            </form>
        );
    
}

export default Selection;