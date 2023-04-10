import React from "react";

class MyComponent extends React.Component {
    // JSX
    render() {
        return (
            <div> My First Component
                {100 * Math.random()}
            </div>
        );
    }
}

export default MyComponent;