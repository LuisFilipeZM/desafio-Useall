let array = [];
let repetido = false;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

for (let i = 0; i < 20; i++) {
    array.push(getRandom(1, 100))
}

for (let i = 0; i < 20; i++) {
    if (array[i] == array[i+1]) {
        repetido = true;
    }
}

console.log(array);
console.log(repetido);