import { useCounterStore } from "./store";

export function Child() {
    const {count, increment, decrement} = useCounterStore(state => state);
    return (
        <div>
            <button onClick={increment}>Increase</button>
            <span>{count}</span>
            <button onClick={decrement}>Decrease</button>
        </div>
    )
}