import React from 'react'

export default function Todo(props) {
    return (
        <div>
            <h2>{props.task.item}</h2>
        </div>
    )
}