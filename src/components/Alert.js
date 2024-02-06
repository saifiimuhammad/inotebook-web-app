import React from 'react'

const Alert = (props) => {
    const changeWord = (word) => {
        if(word === "Danger") {
            word = "Error";
        }
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`} role="alert">
            <strong>{(props.alert.type === "Danger") ? "Error" : props.alert.type}</strong>: {props.alert.message}
        </div>
    )
}

export default Alert
