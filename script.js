let strings = [
    document.getElementById('string-1').innerHTML,
    document.getElementById('string-2').innerHTML,
    document.getElementById('string-3').innerHTML,
    document.getElementById('string-4').innerHTML,
    document.getElementById('string-5').innerHTML,
    document.getElementById('string-6').innerHTML,
];
console.log(strings[2]);
console.log(strings[4]);
console.log(strings[1]);
console.log(strings[5]);
console.log(strings[3]);
console.log(strings[0]);


let elements = document.querySelectorAll('.element')

for (var i = 0; i < elements.length; i++) {
    if (i < 3) {
        elements[i].style.color = 'red'
    } else {
        elements[i].style.color = 'green'
    }
}

function getRandomColor() {
    let color = ['red', 'blue', 'green', 'purple', 'brown']
    let randominxed = Math.floor(Math.random() * color.length)
    return color[randominxed]
}

let container = document.getElementById('container')

for (let i = 0; i < 5; i++) {
    var newElement = document.createElement('div');
    newElement.textContent = `New Element ${i}`;
    newElement.classList.add('element')
    newElement.style.color = getRandomColor()
    container.appendChild(newElement);
}