import classNames from "classnames";

function Notification({correct , onClose}){

    let content = "";

    if(correct){
        content = <div class="notification is-success">
                    <button  onClick={onClose} class="delete"></button>
                        correct Answer !!
                </div>
    }
    else{
        content =  <div class="notification is-danger">
            <button onClick={onClose} class="delete"></button>
                Incorrect Answer !!
        </div>
    }


    return (
        <div>
            {content}
        </div>
    )
}

export default Notification;