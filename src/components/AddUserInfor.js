import React from 'react';

class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: '',
        age: ''
    };

    handleOnChangeInput = (event) => {
        //console.log(event.target.value);
        this.setState({
            name: event.target.value,
        });
    }

    handleOnChangeAge = (event) => {
        //console.log(event.target.value);
        this.setState({
            age: event.target.value,
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random()*100)+1)+'-random', 
            name:this.state.name, 
            age:this.state.age
        });
    }

    render(){
        return (
            <div> My name is {this.state.name}, My age is {this.state.age}
            <button onClick={(event) => this.handleClick()}>Click here</button>
            <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                <label>Your name</label>
                <input 
                value = {this.state.name}
                type="text" 
                onChange={(event)=>this.handleOnChangeInput(event)}/><br/>
                <label>Your age</label>
                <input 
                value = {this.state.age}
                type="text" 
                onChange={(event)=>this.handleOnChangeAge(event)}/>  
                <button>Submit</button>  
            </form>
            </div>
        )
    }
}
export default AddUserInfor;