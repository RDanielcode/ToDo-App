import React from "react";

function useLogicalStorage(itemName, initialValue){
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    let [item, setItem] = React.useState(initialValue);
  
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem)
          setLoading(false)
          setSincronizedItem(true)
  
        }catch(error){
          setError(error)
        }
      },1000)
    }, [sincronizedItem])
    
  
    const saveItem = (newItem)=>{
      try{
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
  
      }catch(error){
        setError(error)
      }
    }

    const sincronizeItem = () =>{
      setLoading(true);
      setSincronizedItem(false);
    }
  
    return {
      item, saveItem, loading, error, sincronizeItem, sincronizedItem
    }
}

export {useLogicalStorage};