import './base_button.css'
function BaseButton({type,className,onClick,text}){
    return (
        <button type = {type} className = {className} onClick = {onClick}>
            {text}
        </button>
    );
}
export default BaseButton;