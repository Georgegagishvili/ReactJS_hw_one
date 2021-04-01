import Counter from "../../components/counter"
import Message from "../../components/message"
import Theme from "../../components/theme"
function HomePage(){
    return(
        <div className="row">
            <Message greeting = 'Two Tasks' short_desc = 'First Task: Counter/Second Task: Theme Changer'></Message>
            <Counter></Counter>
            <Theme></Theme>
        </div>
    );
}
export default HomePage;