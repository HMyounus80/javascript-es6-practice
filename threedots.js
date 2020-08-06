const ages = [12, 14, 16, 17, 13];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 320;
const takapoisa = [650, 450, 320, 820];
// const maximum  = Math.max(business,minister,sochib);
const maximum = Math.max(...takapoisa);
console.log(maximum);