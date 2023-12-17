import { useState } from "react";
import Button from "../components/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Notification from "./Notification";

function Question({qObj ,qnumber ,handleAnswer}){

    const [answer , setAnswer] = useState("");
    const [showNotificaton , setShowNotification] = useState(false);
    const [isAnswerCorrect , setIsAnswerCorrect] = useState(false);

    const handleCheckbox = (ans)=>{
        setAnswer(ans);
    }


    const handleClick = ()=>{
        if(answer === qObj.correct){
            setIsAnswerCorrect(true);
            console.log("correct");
        }
        else{
            setIsAnswerCorrect(false);
            console.log("Incorrect");
        }
        setShowNotification(true);
    }

    const handleClose = ()=> {
        setShowNotification(false);
    }

    let qString = "Q ." + (qnumber + 1) + " ) " + qObj.question;

    return (
        <div>
            <div class="box font-semibold text-lg">
                {qString}
            </div>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
            >
            <FormControlLabel value={"A"} control={<Radio onChange={()=>handleCheckbox("A")}/>} label={qObj.optionA}/>
            <FormControlLabel value={"B"} control={<Radio onChange={()=>handleCheckbox("B")}/>} label={qObj.optionB} />
            <FormControlLabel value={"C"} control={<Radio onChange={()=>handleCheckbox("C")}/>} label={qObj.optionC} />
            <FormControlLabel value={"D"} control={<Radio onChange={()=>handleCheckbox("D")}/>} label={qObj.optionD} />
            </RadioGroup>
            <div className="mt-2">
                <Button onClick={handleClick}  primary rounded className="mt-2">
                        Submit
                </Button>
            </div>
            <div className="mt-2">
                {showNotificaton && <Notification correct={isAnswerCorrect} onClose={handleClose}/>}
            </div>
        </div>
    )
}

export default Question;