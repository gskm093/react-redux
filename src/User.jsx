import React from "react";

function User(props) {
    console.warn(props.data.name);
    return ( 
        <div>
            <h1>User Component</h1>
            <h6>{props.data.name}</h6>
            <h6>{props.data.age}</h6>
        </div>
     );
}

export default User;