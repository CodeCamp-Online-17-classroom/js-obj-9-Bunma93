// write code here
let obj = {};
let key = prompt("key");

while (true) {
    let value = prompt("value");
    obj[key] = value;
    key = prompt("key");
    if (key == "stop") break;
}

console.log(obj);