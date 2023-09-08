import React from "react";
import { userContext } from "./context";

export default function Content2() {
    let [user, setUser] = React.useContext(userContext)

    const contentStyle = {
        backgroundColor:'#ddd',
        textAlign:'center', 
        margin: 10,
        padding: 10
    }

    const onClickSignin = (event) => {
        event.preventDefault()
        setUser('Tee Jerrom')
    }
    
    return (
        <div style={contentStyle}>
        {
            (user)
            ?<span>Hello&nbsp;&nbsp;{user}</span>
            :<span>Please&nbsp;&nbsp;<a href=" " onClick={onClickSignin}>Signin</a></span>
        }
        </div>
    )

}