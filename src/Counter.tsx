import {useEffect, useState} from 'react';
import OwnRedux from './OwnRedux';

export default function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        OwnRedux.subscribe(setCounter, 'counter')
    }, [])

    return <div>{counter}</div>
}