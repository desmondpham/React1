import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    // JSX
    render() {
        const myInfor = ['a','b','c']
        return (
            <div>
                <UserInfor></UserInfor>
                <DisplayInfor name="Lam" age="32"/>
                <hr/>
                <DisplayInfor name="Nhu" age="23" myInfor={myInfor}/>
            </div>
        );
    }
}

export default MyComponent;