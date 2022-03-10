import React from "react";

function useStorageListener({sincronize}){

    const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change)=>{
            if(change.key === 'TODOS_V1'){
                console.log('there has been changes');
                setStorageChange(true);
            }
        })

        const toggleShow = ()=> {
            setStorageChange(true);
            sincronize();
        }
        
        return {
            toggleShow,
            storageChange
        }

}

export {useStorageListener}