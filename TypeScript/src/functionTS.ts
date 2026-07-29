function makeChai(type: string, cups: number) {
  console.log(`Make ${cups} cups of ${type}`);
}

makeChai("Ginger Chai", 3);

function getChaiPrice(): number {
  return 20;
}

// function makeOrder(order: string): string {
//   if (!order) return null;
//   return order;
// }

function chaiLog(): void {
    console.log("Chai is Ready")
}

// function orderChai(type?: string){

// }  // when there is multiple parameter then this optional parameter we write in last of all parameter.

function orderChai(type: string = "Elaichi Chai"){

} // when there is multiple parameter then this default parameter we write in last of all parameter.

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}

const price = createChai({
  type: "Masala Chai",
  sugar: 2,
  size: "large",
});

console.log(price); // 4