import Dropdown from "./Dropdown";
import { useState } from "react";
import useNavigation from '../hooks/use-navigation'

function MenuItem({label , to}) {

    const {navigate , setDisplay} = useNavigation();

    const handleClick = ()=> {
        setDisplay('');
        navigate(to);
    }


    return (
    <div className="navbar-item hover:bg-gray-100 cursor-pointer"
        onClick={handleClick}>
       {label}
    </div>
    )
}

export default MenuItem;