import React from "react";

function TodosLoading (){
    return(
        <div className="loading">
            <div className="loading__circle">
            </div>
            <span className="loading__text">Loading</span>
        </div>
    )
}

export {TodosLoading};