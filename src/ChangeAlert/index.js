import React from "react";
import {useStorageListener} from "./useStorageListener";

function ChangeAlert({sincronize}){
    const {toggleShow, storageChange} = useStorageListener({sincronize})

    if(storageChange){
        return (
            <div>
                <p>Changes</p>
                <button
                    onClick={()=> toggleShow()}
                >
                    Refresh
                </button>

            </div>
        )

    }else{
        return null
    }
}


export {ChangeAlert}