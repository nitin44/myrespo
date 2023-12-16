import PagePanel from "../components/PagePanel";
import Question from "../components/Question";
import { useState } from "react";

function QuestionPage(){

    const [currentPage , setCurrentPage] = useState(1);

    const qConfig = [
        {
            question : "A boy sitting on the topmost berth in the compartment of a train which is just going to stop on a railway station, drops an apple aiming at the open hand of his brother sitting vertically below his hands at a distance of about 2 meter. The apple will fall:" ,
            options : ["Rider is taken back" ,
            "Rider is suddenly afraid of falling" , 
            "Inertia of rest keeps the upper part of body at rest whereas lower part of the body moves forward with the horse ." ,
            "None of the above."
            ] , 
            correct : "B"
        } ,
        {
            question : "A block of mass 0.5kg has an initial velocity of 10m/s down an inclined plane of inclination 30°, the coefficient of friction between the block and the inclined surface is 0.2. The velocity of the block after it travel a distance of 10m along the incline is nearly: (g = 10 m/𝑠2)" ,
            options : ["13 m/s" ,
                        "17 m/s" ,
                        "21 m/s" ,
                        "8 m/s"
            ] , 
            correct : "B"
        }
    ]

    const handleChange = (cmd) => {
        const minRange = 0;
        const maxRange = qConfig.length - 1;

        if(cmd === 'next'){
            if((currentPage + 1) <= maxRange){
                setCurrentPage(currentPage + 1);
            }
        }
        else if(cmd === 'prev'){
            if((currentPage - 1) >= 0){
                setCurrentPage(currentPage - 1);
            }
        }
    }

    return (
        <div className="flex flex-col">
            <PagePanel currentPage={currentPage} handleChange = {handleChange}/>
            <Question qObj={qConfig[currentPage]} qnumber={currentPage} />
        </div>
    )
}

export default QuestionPage;