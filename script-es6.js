class subject {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
    }
    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter(fn => {
            if (fn != fnToRemove) {
                return fn;
            }
        });
    }
    fire() {
        this.observers.forEach(fn => {
            fn.call();
        });
    }
}


const subject1 = new subject();

function Observer1() {
    console.log("Observer 1 Firing");
};

function Observer2() {
    console.log("Observer 2 Firing");
};

subject1.subscribe(Observer1);

subject1.fire();


