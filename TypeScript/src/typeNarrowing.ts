//typeof Narrowing

function print(value: string | number) {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  } else {
    return value.toFixed(2);
  }
}

console.log(print("Chandan"));

//Truthiness Narrowing
//Example 1

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  } else {
    return `Serving Ginger Chai ${msg}`;
  }
}

console.log(serveChai("Masala Chai"));

//Example 2

let age: number | undefined = 20;

if (age) {
  console.log(age.toFixed(2));
} else {
  console.log("Done");
}

// exhaustive check
function light(trafficLight: "red" | "yellow" | "green") {
  if (trafficLight === "red") {
    return "Stop";
  }

  if (trafficLight === "yellow") {
    return "Slow Down";
  }

  if (trafficLight === "green") {
    return "Go";
  }
}

console.log(light("yellow"));


// instanceof
class kulhadChai {
  serve() {
    return "Serving Kulhad Chai";
  }
}
class cutting {
  serve() {
    return "Serving cutting Chai";
  }
}

function serve(chai: kulhadChai | cutting) {
  if (chai instanceof kulhadChai) {
    return chai.serve();
  }
   return chai.serve();
}

const chai1 = new kulhadChai();
const chai2 = new cutting();

console.log(serve(chai1)); // Serving Kulhad Chai
console.log(serve(chai2)); // Serving Cutting Chai


// custom type guard, obj is ChaiOrder and typeof 

// Example 1

type ChaiOrder = {
  type: string;
  sugar: number;
}

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }

  return `Serving custom chai: ${item}`;
}

const order: ChaiOrder = {
  type: "Masala",
  sugar: 2
};

console.log(serveOrder(order));

// output -> Serving Masala chai with 2 sugar

// Example 2

// type ChaiOrder = {
//   type: string;
//   sugar: number;
// }

// function isChaiOrder(obj: any): obj is ChaiOrder {
//   return (
//     typeof obj === "object" &&
//     obj !== null &&
//     typeof obj.type === "string" &&
//     typeof obj.sugar === "number"
//   );
// }

// function serveOrder(item: ChaiOrder | string) {
//   if (isChaiOrder(item)) {
//     return `Serving ${item.type} chai with ${item.sugar} sugar`;
//   }

//   return `Serving custom chai: ${item}`;
// }

// console.log(
//   serveOrder({
//     type: "Masala",
//     sugar: 2
//   })
// );

// console.log(serveOrder("Lemon Tea"));

// output -> Serving Masala chai with 2 sugar
//           Serving custom chai: Lemon Tea



// Example 3

type MasalaChai = {
  type: "masala";
  spiceLevel: number;
};

type GingerChai = {
  type: "ginger";
  amount: number;
};

type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return "Masala chai";

    case "elaichi":
      return "Elaichi chai";

    case "ginger":
      return "Ginger chai";
  }
}


// in operator example 

// type MasalaChai = {
//   spiceLevel: number;
//   milk: boolean;
// };

// type GingerChai = {
//   gingerAmount: number;
//   milk: boolean;
// };

// function brew(order: MasalaChai | GingerChai) {
//   if ("spiceLevel" in order) {
//     // Here TypeScript knows `order` is MasalaChai
//     console.log(order.spiceLevel);
//   } else {
//     // Here TypeScript knows `order` is GingerChaiv 
//     console.log(order.gingerAmount);
//   }
// }