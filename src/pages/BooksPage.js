import List from "../components/List";
import PDFViewer from "../components/PDFViewer";
import Route from "../components/Route";
import { useState } from "react";

function BooksPage() {

    const [showChapter , setShowChapter] =  useState(false);

    const booksConfig = [
        {label : "NCERT" ,path : '/books/NCERT'} , 
        {label : "RBSE"} ,
        {label : "RSOS"}
    ]

    const NCERTclassList = [
        {label : 'Class I' , path : '/books/NCERT/ClassI'},
        {label : 'Class II'},
        {label : 'Class III'},
        {label : 'Class IV'},
        {label : 'Class V'}
    ]

    const ncertClassFirstBooksList = [
        {label : 'English' , path:'eng'},
        {label : 'Mathematics' , path:'math'},
        {label : 'Hindi' , path:'hindi'},
        {label : 'Urdu' , path:'urdu'},
    ]

    const ncertClassFirstHindi = [
        {label : 'chapter 1' , path : 'chapter1'}
    ]

    const handleClick = (path)=> {
        if(path === 'chapter1'){
            showChapter(true);
        }
    }

    return (
        <div>
            <Route path='/books'>
                <List showList={booksConfig}/>
            </Route>
            <Route path='/books/NCERT'>
                <List showList={NCERTclassList}/>
            </Route>
            <Route path='/books/NCERT/ClassI'>
                <List showList={ncertClassFirstBooksList}/>
            </Route>
            <Route path='/books/NCERT/ClassI/Hindi'>
                <List showList={ncertClassFirstHindi} notRouteable={true} onClick={handleClick}/>
            </Route>
            {showChapter && <PDFViewer path='../../public/books/chapter1.pdf'/>}
        </div>
    )
}

export default BooksPage;