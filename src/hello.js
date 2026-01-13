import React from "react";

export default function Hello(props){
    return(
        <h1>hello, {props.name}/[{props.age}살]</h1>
    )
}