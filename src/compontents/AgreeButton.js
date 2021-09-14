const AgreeButton = (props) => {
    return ( 
        <label className="checked">
            <input type="checkbox" onClick={props.onClick} />
            <p>Godkänner villkoren</p>
        </label>
     );
}
 
export default AgreeButton;