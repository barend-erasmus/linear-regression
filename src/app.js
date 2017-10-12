const data = [
    {
        age: 43,
        glucoseLevel: 99,
    },
    {
        age: 21,
        glucoseLevel: 65,
    },
    {
        age: 25,
        glucoseLevel: 79,
    },
    {
        age: 42,
        glucoseLevel: 75,
    },
    {
        age: 57,
        glucoseLevel: 87,
    },
    {
        age: 59,
        glucoseLevel: 81,
    }
];

const sumX = data.map((x) => x.age).reduce((a, b) => {
    return a + b;
});

const sumY = data.map((x) => x.glucoseLevel).reduce((a, b) => {
    return a + b;
});

const sumXY = data.map((x) => x.age * x.glucoseLevel).reduce((a, b) => {
    return a + b;
});

const sumX2 = data.map((x) => Math.pow(x.age, 2)).reduce((a, b) => {
    return a + b;
});

const sumY2 = data.map((x) => Math.pow(x.age, 2)).reduce((a, b) => {
    return a + b;
});

const count = data.length;

const a = ((sumY * sumX2) - (sumX * sumXY)) / ((count * sumX2) - Math.pow(sumX, 2));
const b = ((count * sumXY) - (sumX * sumY)) / ((count * sumX2) - Math.pow(sumX, 2))


console.log(`y = ${a} + ${b} * x`);