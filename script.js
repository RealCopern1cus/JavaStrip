const dolScore = [89, 96, 108]

function getDAvg(dolScore) {
    const total = dolScore.reduce((acc, c) => acc + c, 0);
    return total / dolScore.length;
}

const averageD = getDAvg(dolScore);
console.log(averageD);

const koaScore = [88, 91, 110]

function getKAvg(koaScore) {
    const total = koaScore.reduce ((acc, c) => acc + c, 0);
    return total / koaScore.length;
}

const averageK = getKAvg(koaScore);
console.log(averageK);

if (averageD > averageK) {
    console.log('Dolpins win the trophy');
} else if (averageK > averageD) {
    console.log ('Koalas win the trophy');
} else if (averageD === averageK) {
    console.log('Bothe win the trophy!');
}