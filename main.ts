console.log("Hello Object !");
const myProperties: {
  name: string;
  rollNo: number;
  age: number;
  address: string;
} = {
  name: "Abdullah",
  rollNo: 101010101,
  age: 18,
  address: "Hello World",
};
console.log(myProperties.age);
console.log(myProperties["age"]);

const mycharacter = ["Ubaid", 18, "Pakistan", 101010101];
console.log(mycharacter[1]);
const userPrompt = "age";
console.log(myProperties[userPrompt]);
console.log(myProperties.address);

let rollNumber: string | number | boolean;
rollNumber = "PIAIC-123456";
rollNumber = 12344555;
rollNumber = false;
console.log(rollNumber);
