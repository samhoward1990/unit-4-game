function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRedGemNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateBlueGemNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;

}
$(".random-number").text(generateRandomNumber(19, 120));
generateRandomNumber(19, 120);
console.log(generateRandomNumber(19, 120));


generateRedGemNumber(1, 12);
console.log(generateRedGemNumber(1, 12));

generateBlueGemNumber(1, 12)

