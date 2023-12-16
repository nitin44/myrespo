function Question({qObj ,qnumber}){

    const op = ['a' , 'b' ,'c' , 'd'];

    const renderedList = qObj.options.map((item , index)=> {
        return (
            <div  key={index} className="panel-block">
                <label class="checkbox ">
                        <input type="checkbox" />
                        ({op[index]}) {item}
                </label>
            </div>
        )
    })

    return (
        <div>
            <div class="box font-semibold text-lg">
                Q. {qnumber+1} {qObj.question}
            </div>
            {renderedList}
        </div>
    )
}

export default Question;