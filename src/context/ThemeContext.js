import { createContext, useState } from "react";

export let ThemeContext=createContext();

export default function ThemeContextProvider(props){
      let [Theme,setTheme]=useState(false)
      function toggoleTheme(){
        setTheme(!Theme)
      }
    
return <ThemeContext.Provider value={{Theme,toggoleTheme}}>
{props.children}
</ThemeContext.Provider>
}

