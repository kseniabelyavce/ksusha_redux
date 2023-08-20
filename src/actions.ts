import OwnRedux from './OwnRedux';

OwnRedux.createAction('INCREMENT_COUNTER', (counter: any) => {
    if (!counter) {
        counter = 0
    }
    return counter + 1
}, 'counter')