import React from 'react';
import './TodoItem.css';
import { FaTimesCircle,FaCheck } from "react-icons/fa";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <FaCheck
                    size="2em"
                    color="#52BE80" />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            
            <FaTimesCircle
                color="#CB4335"
                size="2em"
                onClick={props.onDelete} 
            />
        </li>
    );
}

export { TodoItem };