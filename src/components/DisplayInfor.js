import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component{
    state={
        isShowListUsers: true
    }
    
    handleShowHide = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }

    render(){
        console.log(this.props)
        //destructuring array/object
        const {listUsers} = this.props;
        //props
        return(
            <div className='display-infor-container'>
                <img src={logo}/>
                <div>
                    <span onClick={()=> {this.handleShowHide()}}>{this.state.isShowListUsers === true? "Hide list users": "Show list users"}</span>
                </div>
                {this.state.isShowListUsers && 
                    <div>
                        { listUsers.map((user)=>{
                            console.log("check map user", user);

                            return (
                                <div key={user.id} className={+user.age > 18? "green" : "red"}>
                                    <div>ID: {user.id}</div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr/>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;