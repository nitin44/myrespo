import { createContext , useState} from "react";
import { useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {

    const [currentPath , setCurrentPath] = useState('');
    const [display , setDisplay] = useState('');

    useEffect(()=>{
        const handler = ()=> {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', handler);

        return ()=>{
            window.removeEventListener('popstate' , handler);
        }
    },[])

    const navigate = (to)=>{
        console.log("navigating to " , to);
        window.history.pushState({},'',to);
        setCurrentPath(to);
    }

    return(
        <NavigationContext.Provider value={{currentPath , navigate , display , setDisplay}}>
            {children}
        </NavigationContext.Provider>
    )
}

export {NavigationProvider};
export default NavigationContext;
