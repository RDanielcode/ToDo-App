import React from "react";
// import { TodoContext } from "../TodoContext";
import {FcGoodDecision} from "react-icons/fc";

function CreateTodoButton ({setOpenModal}){
    // const {setOpenModal, /*openModal*/} = React.useContext(TodoContext);
    const buttonFunction = () => {
        // if (openModal){
        //     setOpenModal(false)
        // } else{
        //     setOpenModal(true)
        // }
        setOpenModal(prevState => !prevState)
    };

    return (
        <FcGoodDecision className="button" onClick={buttonFunction}/>
        
    )
}

export {CreateTodoButton};