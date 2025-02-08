import { createContext, useState } from "react";

export let CounterContext=createContext();

export default function CounterContextProvider(props){
      let [num,setNum]=useState(0)
    
return <CounterContext.Provider value={{num,setNum}}>
{props.children}
</CounterContext.Provider>
}

