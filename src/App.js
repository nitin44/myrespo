import Menu from "./components/Menu";
import Title from "./components/Title";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import QuestionPage from "./pages/QuestionPage";
import PDFViewer from "./components/PDFViewer";
import Route from "./components/Route";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import useNavigation from "./hooks/use-navigation";

function App() {

    const {display , setDisplay} =  useNavigation()

    const handleClick = (path)=> {
        setDisplay(path);
    }

    function showDisplay(){
        if(display === 'pdfviewer'){
            return <PDFViewer />;
        } else if(display == 'questionPage'){
            return <QuestionPage />;
        }
    }

    return (
    <div className="flex flex-col">
        <Title />
        <Menu />
        <div className="flex flex-row">
            <div className="basis-1/5">
                <Sidebar onClick={handleClick}/>
            </div>
            <div className="basics-4/5">
                {showDisplay()}
            </div>
            
        </div>
    </div>
    );
}

export default App;