import Counter from './Counter';
import Button from './Button';

export default function Sidebar() {
    return <div style={{float: 'left', width: '200px'}}>
        Sidebar
        <br/>
        <Counter/>
        <Button/>
    </div>
}