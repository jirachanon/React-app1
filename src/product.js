import React from "react";
import {BrowserRouter, NavLink} from "react-router-dom";
import './products.css'

export default function Products(){
    const data = [
        ['React', 500],
        ['React Native', 650],
        ['Node.js', 450],
        ['MongoDB', 300],
        ['Express.js', 650]
    ]

    return(
        <table border="1">
            <tr><th>ชื่อ</th><th>ราคา</th></tr>
            {
                data.map(d => {
                    return <tr><td>{d[0]}</td><td>{d[1]}</td></tr>
                })
            }
        </table>
    )
}