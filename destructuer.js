
const person = {name: 'jack william', age: 17, job: 'Facebook', address: 'Mirpur',gfName: 'Ema Watson',phone: '017548645', friends:['Tom chokar ','Tom hukes','Tom koros']}

const {phone} = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'tiger Leader'
    }
}
const {leader} = complexObject.info;
// console.log(leader);


// const gfName = person.gfName;
// const phone = person.phone;
// const {phone, gfName, sellery, address} = person;
// const {address} = person;

// console.log(gfName, phone, address, sellery);
// console.log(gfName, phone, address, sellery);

const friends = ['sakib kan', 'Arman kan', 'Amir kan', 'salman kan', 'saharuk kan'];
const [firstName, ...olderName] = friends;
console.log( olderName);