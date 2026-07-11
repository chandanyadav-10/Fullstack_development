// practice by myself
let n: any = "104"
let v =  n as string
console.log(v.length)
console.log(typeof v)


let response: any = "42";
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement;


// any

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;

value.toUpperCase();


// unknown

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;

if (typeof newValue === "string") {
  newValue.toUpperCase();
}


// Error handling with unknown

try {
  // Risky code
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }

  console.log("Errro", error);
}


// Type Assertion

const data: unknown = "chai aur code";
const strData: string = data as string;


// Literal Union Types

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }

  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }

  role;
}


// never type

function neverReturn(): never {
  while (true) {}
}

