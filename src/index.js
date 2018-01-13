import Rx from 'rxjs/Rx';

Rx.Observable.of(1, 2, 3)

console.log('0000000');

// var button = document.querySelector('button');
// button.addEventListener("click", () => console.log('dddddd'));


var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
    .subscribe(() => console.log('Clicked!'));