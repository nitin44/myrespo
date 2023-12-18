import Route from './Route';
import List from './List';
import HomePage from '../pages/HomePage';
import BooksPage from '../pages/BooksPage';
import PDFViewer from './PDFViewer';


function Sidebar({onClick}) {

    

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
        {label : 'Hindi' , path:'/books/NCERT/ClassI/hindi'},
        {label : 'Urdu' , path:'urdu'},
    ]

    const ncertClassFirstHindi = [
        {label : 'chapter 1' , path : 'pdfviewer'}
    ]

    const sidebarConfig = {
        eleven : [
            {label : "Physics" , path : "/eleven/physics"},
            {label : "Chemistry" , path : "/eleven/chemistry"},
            {label : "Biology" , path : "/eleven/biology"}
        ],
        twelve : [
            {label : "Physics" , path :"twelve/physics"},
            {label : "Chemistry" , path : "/twelve/chemistry"},
            {label : "Biology" , path : "/twelve/biology"}
        ]
    }

    const elevenPhysicsConfig = [
        {label : 'Units and Measurements' , path : 'questionPage'},
        {label : 'Motion in a Straight Line' , path : '/eleven/physics/Motion in a Straight Line'},
        {label : 'Motion in a Plane' , path : '/eleven/physics/Motion in a Plane'},
        {label : 'Laws of Motion' , path : '/eleven/physics/Laws of Motion'},
        {label : 'Work, Energy and Power' , path : '/eleven/physics/Work, Energy and Power'},
        {label : 'System of Particles and Rotational Motion' , path : '/eleven/physics/System of Particles and Rotational Motion'},
        {label : 'Gravitation' , path : '/eleven/physics/Gravitation'},
        {label : 'Mechanical Properties of Solids' , path : '/eleven/physics/Mechanical Properties of Solids'},
    ]

    return (
        <div className='w-60'>
            <Route path='/eleven'>
                <List showList={sidebarConfig.eleven}/>
            </Route>
            <Route path='/eleven/physics'>
                <List showList={elevenPhysicsConfig} onClick = {onClick} notRouteable={true}/>
            </Route>
            <Route path='/books'>
                <List showList={booksConfig}/>
            </Route>
            <Route path='/books/NCERT'>
                <List showList={NCERTclassList}/>
            </Route>
            <Route path='/books/NCERT/ClassI'>
                <List showList={ncertClassFirstBooksList}/>
            </Route>
            <Route path='/books/NCERT/ClassI/hindi'>
                <List showList={ncertClassFirstHindi} notRouteable={true} onClick={onClick}/>
            </Route>
        </div>
    )
}

export default Sidebar;