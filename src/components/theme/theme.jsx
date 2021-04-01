import "./theme.css";
import {useState} from "react";
import BaseButton from "../ui/button";
function Theme(){
    const [background, setBackground] = useState('red');
    const changeBackground = (newBackground) => {
        setBackground(newBackground);
    }
    return(
        <div className = {`bg-main bg-${background}`}>
            <div>
                <BaseButton className = 'btn bg-red' text = 'red' onClick = {() => changeBackground('red')}></BaseButton>
                <BaseButton className = 'btn bg-cyan' text = 'cyan' onClick = {() => changeBackground('cyan')}></BaseButton>
                <BaseButton className = 'btn bg-orange' text = 'orange' onClick = {() => changeBackground('orange')}></BaseButton>
                <BaseButton className = 'btn bg-skyblue' text = 'skyblue' onClick = {() => changeBackground('skyblue')}></BaseButton>
                <BaseButton className = 'btn bg-lime' text = 'lime' onClick = {() => changeBackground('lime')}></BaseButton>
                <BaseButton className = 'btn bg-maroon' text = 'maroon' onClick = {() => changeBackground('maroon')}></BaseButton>
                <BaseButton className = 'btn bg-purple' text = 'purple' onClick = {() => changeBackground('purple')}></BaseButton>
            </div>
        </div>

    );
}
export default Theme;