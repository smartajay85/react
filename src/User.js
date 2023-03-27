import { buildQueries } from "@testing-library/react";

// functional component 
function User(props)
{
    console.log(props);
    return(
        <div style={{backgroundColor: "red"}}>
        <h3>User Function component</h3>
        <h4>Hello {props.name} ur email is {props.email}</h4>
        <h6>Address : {props.other.mobile}</h6>
        </div>
    )
        
}

export default User;