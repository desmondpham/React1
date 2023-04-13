import React from "react";

class DisplayInfor extends React.Component{
    render(){
        console.log(this.props)
        //destructuring array/object
        const {listUsers} = this.props;
        //props
        return(
            <div>
                { listUsers.map((user)=>{
                    return (
                        <div key={user.id}>
                            <div>ID: {user.id}</div>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor;