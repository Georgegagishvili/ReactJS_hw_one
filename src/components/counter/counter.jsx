import {useState} from "react";
import "./counter.css";
import BaseButton from "../ui/button"

function Counter(){
    const [count, setCount] = useState(0);
    const onButtonClick = (value) => {
        setCount(count + value);
    } 
    return(
        <div className = 'counter-container'> 
            <h1>Counter {count}</h1>
            <div className = 'button_list'>
                <BaseButton type = 'button' className = 'btn btn_counter_plus'
                 onClick = { () => onButtonClick(1)}
                  text = '+1'>
                </BaseButton>

                <BaseButton type = 'button' className = 'btn btn_counter_plus'
                 onClick = { () => onButtonClick(5)}
                  text = '+5'>
                </BaseButton>

                <BaseButton type = 'button' className = 'btn btn_counter_plus'
                 onClick = { () => onButtonClick(100)}
                  text = '+100'>
                </BaseButton>

                <BaseButton type = 'button' className = 'btn btn_counter_minus'
                 onClick = { () => onButtonClick(-100)}
                  text = '-100'>
                </BaseButton>

                <BaseButton type = 'button' className = 'btn btn_counter_minus'
                 onClick = { () => onButtonClick(-5)}
                  text = '-5'>
                </BaseButton>

                <BaseButton type = 'button' className = 'btn btn_counter_minus'
                 onClick = { () => onButtonClick(-1)}
                  text = '-1'>
                </BaseButton>
            </div>
        </div>
    );
}

export default Counter;