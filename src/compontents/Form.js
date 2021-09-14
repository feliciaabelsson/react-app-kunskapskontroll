import React, { Component } from "react";
import Selection from './Selection.js';
import '../assets/Form.css';
import Checkbox from "./Checkbox.js";
import Input from "./Input.js";
import Submit from "./Submit.js";
import AgreeButton from "./AgreeButton.js";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            secondClass: "2:a klass",
            firstClass: "1:a klass",
            tickets: "",
            title: '',
            checked: false
        }
    }

    /* Förnamn och Efternamn */
    updateFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

     updateLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    /* 1:a eller 2:a klass */
    updateSecondClass = (e) => {
        this.setState({
            secondClass: e.target.value
        });
    }
    
    updateFirstClass = (e) => {
        this.setState({
            firstClass: e.target.value
        });
    }

    onValueChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    }
    
    /* Antal biljetter */
    onAmountChange = (e) => {
        this.setState({
            selectedAmount: e.target.value
        });
    }
    
    /* Vald titel */
    chosenTitle = (e) => {
        this.setState({
            selectedTitle: e.target.value
        });
    }


    /* Vald Titel */
    // changeTitle = (event) => {
    //     let title = event.target.value;
    //     this.setState({title})
    // }
  
    /* Skicka bokning till app */
    setMessage = (e) => {
        e.preventDefault();
        this.setState({
            firstName: '',
            lastName: "",
            selectedOption: "",
            selectedAmount: "",
            selectedTitle: "",
            checked: ""
        })
   
        this.props.setFirstNameInApp(this.state.firstName);
        this.props.setLastNameInApp(this.state.lastName);
        this.props.setClassOptionInApp(this.state.selectedOption); 
        this.props.setAmountOfTicketsInApp(this.state.selectedAmount); 
        this.props.setTitleInApp(this.state.selectedTitle); 
        this.props.setTitleInApp(this.state.selectedTitle); 
        
    }

    agreeChecked = () => {
         this.setState({
            checked: true
        })
    }

    
    
    render() {  
        return(
            <div>
                <section className="checkbox">
                    <Checkbox value={this.state.secondClass} updateClass={this.onValueChange} label="2:a klass" checked={this.state.selectedOption === "2:a klass"} />
                    <Checkbox value={this.state.firstClass} updateClass={this.onValueChange} label="1:a klass" checked={this.state.selectedOption === "1:a klass"}/>
                </section>
                <section className="selection-comp">
                    <Selection label="Antal biljetter" opt1={"1"} opt2={"2"} opt3={"3"} updateSelection={this.onAmountChange} />
                    <Selection label="Titel" opt1={"Mr"} opt2={"Ms"} opt3={"Mrs"} updateSelection={this.chosenTitle}/>
                </section>
                <Input value={this.state.firstName} updateName={this.updateFirstName} label="Förnamn" />
                <Input value={this.state.lastName} updateName={this.updateLastName} label="Efternamn" />
                <AgreeButton onClick={this.agreeChecked} />
                <Submit onSubmit={this.setMessage} />
            </div>
            
        );
    }
}

export default Form;


