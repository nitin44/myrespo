import Chaper1 from './chapter1.pdf';


function PDFViewer({path}) {
    return(
        <div>
            <h1>Click here to Download file</h1>
            <a
                href = {Chaper1}
                download="Example-download-file"
                target='_blank'
                rel="noreferrer"
            >
                <button>Download pdf file</button>
            </a>
        </div>
    )
}

export default PDFViewer;