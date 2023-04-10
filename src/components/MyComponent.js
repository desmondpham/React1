import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Hoang Lam Pham',
        address: 'Swanston st',
        age: 32
    };

    handleClick(event) {
        console.log("Click me my button");
        console.log("random ", Math.floor((Math.random() * 100) + 1));

        this.setState({
            name: 'Desmond',
            age: Math.floor((Math.random() * 100) + 1)
        });
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);

    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name}, My age is {this.state.age}
                <button onClick={(event) => this.handleClick()}>Click here</button>
                <button onMouseOver={this.handleOnMouseOver}>Move over here</button>
            </div>
        );
    }
}

export default MyComponent;