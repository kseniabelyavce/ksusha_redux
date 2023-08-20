export default class OwnRedux {
    static state: any = {};
    static actions: any = {};
    static actionStoreKeys: any = {};
    static subscribers: any = [];

    static createAction(actionName: string, callback: Function, storeKey: string) {
        this.actions[actionName] = callback;
        this.actionStoreKeys[actionName] = storeKey;
    }

    static subscribe(callback: Function, storeKey: string) {
        if (!this.subscribers[storeKey]) {
            this.subscribers[storeKey] = [];
        }
        this.subscribers[storeKey].push(callback);
    }

    static fire(actionName: string) {
        const storeKey = this.actionStoreKeys[actionName];
        const currentValue = structuredClone(this.state[storeKey]);
console.log(this.actions)
        const result = this.actions[actionName](currentValue);

        this.state[storeKey] = result;
        this.subscribers[storeKey].forEach((subscriber: Function) => subscriber(result))
    }

}