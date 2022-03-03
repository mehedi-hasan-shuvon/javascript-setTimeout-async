

console.log('first');
// const timeIntervalId = setInterval(() => {
//     console.log('tik tik tik');
// }, 3000);

let seconds = 0;

const timeId = setInterval(() => {
    // seconds++;
    // ++seconds;
    // console.log(seconds++);
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000)

console.log('second');