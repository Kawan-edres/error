import { useSelector } from "react-redux";
function Counter() {
    const count = useSelector(state => state.count.count);
    return (
        <div>
        <h1>Counter {count}</h1>
            
        </div>
    )
}

export default Counter;
