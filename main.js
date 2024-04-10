const countValue = document.querySelector('#counter');
let incrementId = null;
let decrementId = null;

const IncrementStart = () => {
    Increment();
    incrementId = setInterval(Increment,200);
};

const IncrementStop = () => {
    clearInterval(incrementId);
};

const DecrementStart = () => {
    Decrement();
    decrementId = setInterval(Decrement,200);
};

const DecrementStop = () => {
    clearInterval(decrementId);
};

const Increment = () => {
    var value = parseInt(countValue.innerHTML);
    value++;
    countValue.innerHTML = value;
};

const Increment10 = () => {
    var value = parseInt(countValue.innerHTML);
    value+=10;
    countValue.innerHTML = value;
};

const Decrement = () => {
    let value = parseInt(countValue.innerHTML);
    if(value>0){
        value--;
        countValue.innerHTML = value;
    }
};

const Decrement10 = () => {
    let value = parseInt(countValue.innerHTML);
    value-=10;
    if(value>0){
        countValue.innerHTML = value;
    }
};

const Reset = () => {
    let value = parseInt(countValue.innerHTML);
    value=0;
    countValue.innerHTML = value;
}