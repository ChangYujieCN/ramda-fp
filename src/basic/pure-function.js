// console.log(Math.random());
// console.log(Math.random());
//
// let a = 1;
// const inc = () => a + 1;
// console.log(inc());
// a++;
// console.log(inc());

// const impureAssoc = (key, value, object) => {
//   object[key] = value;
// };
//
// const person = {
//   name: 'Bobo'
// };
// console.log(person);
// const result = impureAssoc('shoeSize', 400, person);
//
// console.log({
//   person,
//   result
// });

const pureAssoc = (key, value, object) => {
    const newObject = { ...object };
    newObject[key] = value;
    return newObject;
};
const person2 = {
    name: 'Bobo'
};
const result2 = pureAssoc('shoeSize', 400, person2);
console.log({
    person2,
    result2
});
