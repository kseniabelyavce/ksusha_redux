import Counter from './Counter';
import Button from './Button';

export default function Content() {
    return <div style={{float: 'left'}}>
        Content
        <br/>
        <Counter/>
        <Button/>
    </div>;
}