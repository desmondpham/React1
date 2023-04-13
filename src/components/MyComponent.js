import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name : "Lam", age:"32"},
            {id: 2, name : "Nhu", age:"23"},
            {id: 3, name : "Eric", age:"28"},
            {id: 4, name : "Soc", age:"12"},
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers:[userObj, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers]
        listUsersClone = listUsersClone.filter(item =>item.id !== userId)
        this.setState({
            listUsers: listUsersClone
        })
    }

    // JSX
    render() {
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
                <DisplayInfor 
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </div>
        );
    }
}

export default MyComponent;