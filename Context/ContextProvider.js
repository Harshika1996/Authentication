import React ,{useState} from "react";
import { current } from "../src/Themecolor/Thememode";

const MyContext = React.createContext();

const ContextProvider = ({children}) =>{
const[isAuthentication ,setisAuthentication] = useState('false');
const[themeValue,setthemeValue]=useState(); // 0 for lightScreen

const themes =  {
     
    dark: {
     
        background:{backgroundColor:"black"},
        text:{color:"white"},
  

    },

    light:{
     
        background:{backgroundColor:"white"},
        text:{color:"black"},
  

    },
}

// black #000000
// white #FFFFFF
    return(
        <MyContext.Provider value={{
            isAuthentication ,setisAuthentication,themeValue,setthemeValue,themes
        }}>
            {children}

        </MyContext.Provider>
    )
};

export  {MyContext,ContextProvider};