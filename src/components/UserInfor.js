import React from 'react';

class UserInfor extends React.Component {
    state = {
        name: 'Hoang Lam Pham',
        address: 'Swanston st',
        age: 32
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
        console.log(this.state);
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
            <br/>
            <br/></div>
        )
    }
}

export default UserInfor;