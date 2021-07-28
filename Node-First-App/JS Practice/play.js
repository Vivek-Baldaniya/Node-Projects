// const person = {
//     name: "Vivek",
//     age: 18,
//     greet() {
//         console.log("Hii, I am " + this.name);
//     }
// };

// //destructuring the object
// const printData = ({ name }) => {
//     console.log(name);
// }

// printData(person);

// const { name, age } = person;
// console.log(name, age);

// //spread operator
// // const copyPerson = {...person };
// // console.log(copyPerson);

// // const hobbies = ["Chess", "Learning", 3];

// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }

// // console.log(hobbies.map(hobby => "Vivek " + hobby));
// // console.log(hobbies);

// // hobbies.push("Coding");
// // const copyArray = hobbies.slice();

// //spread operator
// // const copyArray = [...hobbies];
// // console.log(copyArray);

// //rest operator
// // const toArray = (...args) => {
// //     return args;
// // }

// // console.log(toArray(1, 2, 3, 4, 5));

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 500);
    });
    return promise;
}

setTimeout(() => {
    console.log("Timer is Done!");
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        })
}, 1000);

console.log("Hello");
console.log("hii");