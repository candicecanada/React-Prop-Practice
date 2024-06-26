import { Child } from "./Child";
import { useCounterStore } from './store';

export function Counter() {
    const { count } = useCounterStore((state) => state);
    return (
        <div> 
            <h1>I am the counter {count}!</h1>
            <Child />
        </div>
    )
}
