import React from "react";
import {FcCheckmark} from "react-icons/fc";
import {FcOk} from "react-icons/fc";
import {FcDisapprove} from "react-icons/fc";


function TodoItem (props){
    // const onComplete = ()=> {
    //     props = {...props, completed: true}
    //     console.log(props)
    //     return props
    // };
    // const onDelete = ()=> console.log(`deleted ${props.text}`);        

    return (
        <li className='container__item'>
            {!props.completed && <FcCheckmark onClick={props.onComplete}/>}
            {props.completed && <FcOk onClick={props.onComplete}/>}
            {/* <input  type='checkbox' onClick={props.onComplete}/> */}
            <p className={`${props.completed && 'item__text--deleted'}` }>{props.text}</p>
            <span onClick={props.onDelete}><FcDisapprove/></span>
        </li>
    )
}

export {TodoItem};