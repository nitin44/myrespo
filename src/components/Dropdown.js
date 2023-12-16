import Panel from "./Panel"

function Dropdown() {

    const config = [
        {label : 'class 11'},
        {label : 'class 12'}
    ]

    const dropdownList = config.map((item) => {
        return <div
        key={item.label}>
            <Panel>{item.label}</Panel>
        </div>
    })

    return (
    <div className="flex flex-col">
        {dropdownList}
    </div>
    )
}

export default Dropdown;