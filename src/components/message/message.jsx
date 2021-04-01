import "./message.css";

function Message({greeting,short_desc}){
    return (
        <div className = 'message'>
            <h1>{greeting}</h1>
            <p>{short_desc}</p>
        </div>
    );
}

export default Message;