import MenuItem from "./MenuItem"

const MenuItemConfig = [
    {label : "Home" , path : '/'},
    {label : 'Class 11' , path : '/eleven'},
    {label : 'Class 12' , path : '/twelve'},
]



function Menu () {

    const MenuItemList = MenuItemConfig.map((item)=> {
        return <MenuItem key={item.label} label={item.label} to={item.path}/>
    })
    
    return (
    <div className="navbar">
        <div className="navbar-menu">
            <div className="navbar-start">
                {MenuItemList}
            </div>
        </div>
    </div>
    )
}

export default Menu;