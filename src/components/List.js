import useNavigation from "../hooks/use-navigation";
import 'bulma/css/bulma.min.css';

function List({showList,notRouteable ,onClick}){

    const {navigate} = useNavigation();

    const handleClick = (path)=>{
        if(notRouteable) {
            onClick(path);
           return; 
        }
        navigate(path);
    }

    const renderedList = showList.map((item)=> {
        return (
        <div className="panel-block hover:bg-gray-100 cursor-pointer"
        key = {item.label} onClick={()=> handleClick(item.path)}>
            {item.label}
        </div>
        )
    })

    return (
        <div>
            {renderedList}
        </div>
    )
}

export default List;