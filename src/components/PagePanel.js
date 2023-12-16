function PagePanel({currentPage , handleChange}) {
    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <button className="pagination-previous" onClick ={()=> handleChange("prev")}>Previous</button>
            <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1">{currentPage + 1}</a></li>
            </ul>
            <button className="pagination-next" onClick ={()=>handleChange("next")}>Next page</button>
        </nav>
    )
}

export default PagePanel;