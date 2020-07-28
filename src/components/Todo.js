import React from 'react';

export default (props) => (
    <div>
        <div style={{ height: "10px" }}> </div>
        <div style={{ display: "flex", justifyContent: `center`, padding: "5px" }}>
            <div
                style={{ textDecoration: props.todo.complete ? 'line-through' : '' }}
                onClick={props.toggleComplete}>
                {props.todo.text}
            </div>
            <div style={{ width: "20px" }}> </div>
            <button onClick={props.onDelete}>X</button>
        </div>
    </div>
)