const name = "Mario";
console.log(name);

console.log(global);

global.setTimeout(() => {
    console.log('in the timeout');
}, 3000);