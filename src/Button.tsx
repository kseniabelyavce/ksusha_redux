import OwnRedux from './OwnRedux';

export default function Button() {
    return <button onClick={() => OwnRedux.fire('INCREMENT_COUNTER')}>Update counter</button>
}