import React from "react";
import {FcCheckmark} from "react-icons/fc";
import {FcOk} from "react-icons/fc";
import {FcDisapprove} from "react-icons/fc";


function TodoItem ({completed, onComplete, onDelete, text}){
    // const onComplete = ()=> {
    //     = {... completed: true}
    //     console.log(
    //     return     // };
    // const onDelete = ()=> console.log(`deleted ${text}`);        

    return (
        <li className='container__item'>
            {!completed && <FcCheckmark onClick={onComplete}/>}
            {completed && <FcOk onClick={onComplete}/>}
            {/* <input  type='checkbox' onClick={onComplete}/> */}
            <p className={`${completed && 'item__text--deleted'}` }>{text}</p>
            <span onClick={onDelete}><FcDisapprove/></span>
        </li>
    )
}

export {TodoItem};