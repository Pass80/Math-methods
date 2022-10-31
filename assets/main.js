console.log('============1==============');
console.log(Math.PI);
const PI = Math.PI;
const rounded_PI = PI.toFixed(2);
console.log(rounded_PI);

console.log('=============2=============');

let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

for (num of array) {
    console.log(Math.round(num));
}

console.log('=============3=============');

const randomNum = Math.random();
const randomNum1_10 = Math.floor(Math.random() * 10) + 1;
const randomNum1_100 = Math.floor(Math.random() * 100) + 1;
console.log(randomNum, randomNum1_10, randomNum1_100);

console.log('=============4=============');

const min = Math.min(
    393,
    205,
    479,
    47,
    376,
    267,
    385,
    2,
    190,
    383,
    286,
    462,
    115,
    138,
    331,
    409,
    427,
    245,
    224,
    276,
    483,
    55,
    147,
    177,
    208,
    347,
    135,
    282,
    33,
    270,
    475,
    426,
    476,
    453,
    474,
    351,
    219,
    358,
    354,
    410,
    240,
    139,
    371,
    356,
    277,
    202,
    264,
    204,
    447,
    488
);

const max = Math.max(
    393,
    205,
    479,
    47,
    376,
    267,
    385,
    2,
    190,
    383,
    286,
    462,
    115,
    138,
    331,
    409,
    427,
    245,
    224,
    276,
    483,
    55,
    147,
    177,
    208,
    347,
    135,
    282,
    33,
    270,
    475,
    426,
    476,
    453,
    474,
    351,
    219,
    358,
    354,
    410,
    240,
    139,
    371,
    356,
    277,
    202,
    264,
    204,
    447,
    488
);
console.log(min, max);

console.log('=============5=============');

function guessTheNumber() {
    const message = prompt('Enter number between 1 and 10');
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    if (+message === secretNumber) {
        console.log(`You win the secret number is ${secretNumber} `);
    } else {
        return console.log(`You loss the secret number is ${secretNumber} `);
    }
}

guessTheNumber();

console.log('=============6=============');

let edelMetallPreise = [
    { name: 'Gold', preiseGramEuro: 42.91, veranderung: '+0.12%' },
    { name: 'Silber', preiseGramEuro: 0.51, veranderung: '+1.02%' },
    { name: 'Platin', preiseGramEuro: 25.74, veranderung: '+0.41%' },
    { name: 'Palladium', preiseGramEuro: 50.93, veranderung: '0.00%' },
    { name: 'Rhodium', preiseGramEuro: 160.12, veranderung: '-0.10%' },
    { name: 'Iridium', preiseGramEuro: 42.84, veranderung: '0.00%' },
    { name: 'Ruthenium', preiseGramEuro: 7.36, veranderung: '0.00%' },
    { name: 'Rhenium', preiseGramEuro: 37.22, veranderung: '-0.53%' },
    { name: 'Osmium', preiseGramEuro: 11.54, veranderung: '0.00%' },
];

let metalArray1 = [];
edelMetallPreise.forEach((element) => {
    metalArray1.push(element.name);
});
console.log(metalArray1);

let metalArray2 = [];
edelMetallPreise.map((element) => {
    metalArray2.push(element.name);
});
console.log(metalArray2);

let priceArray1 = [];
edelMetallPreise.forEach((element) => {
    priceArray1.push(element.preiseGramEuro);
});
console.log(priceArray1);

let priceArray2 = [];
edelMetallPreise.map((element) => {
    priceArray2.push(element.preiseGramEuro);
});
console.log(priceArray2);

let veränerungArray1 = [];
edelMetallPreise.forEach((element) => {
    veränerungArray1.push(element.veranderung);
});
console.log(veränerungArray1);

let veränerungArray2 = [];
edelMetallPreise.map((element) => {
    veränerungArray2.push(element.veranderung);
});
console.log(veränerungArray2);

let teurerAls50 = [];
edelMetallPreise.filter((element) => {
    if (element.preiseGramEuro >= 50) {
        teurerAls50.push(element.preiseGramEuro);
    } else return;
});

console.log(teurerAls50);

const table = document.getElementById('table');

const createTable = () => {
    for (element of edelMetallPreise) {
        table.innerHTML += `<tr><td>${element.name}</td><td>${element.preiseGramEuro}</td><td>${element.veranderung}</td></tr> `;
    }
};

createTable();
