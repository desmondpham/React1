import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name : "Lam", age:"32"},
            {id: 2, name : "Nhu", age:"23"},
            {id: 3, name : "Eric", age:"28"},
        ]
    }

    // JSX
    render() {
        return (
            <div>
                <UserInfor></UserInfor>

                <DisplayInfor listUsers={this.state.listUsers}/>
            </div>
        );
    }
}

export default MyComponent;