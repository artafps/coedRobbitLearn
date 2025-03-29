const data = 'awdawdwad'
console.log(data);
function addNumbers(a, b) {
    return a * b; // اشتباه: اینجا باید جمع (+) باشه نه ضرب (*)
}

console.log(addNumbers(3, 5)); // انتظار داریم 8 باشه، ولی 15 چاپ میشه!
