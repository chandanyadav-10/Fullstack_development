//Example 1 - typealias


// type ChaiOrder = {
//   type: string;
//   sugar: number;
//   strong: boolean;
// };

// function makeChai(order: ChaiOrder) {
//   console.log(order);
// }

// function serveChai(order: ChaiOrder) {
//   console.log(order);
// }

/*-------------------------------------------------------------------------------*/

// type ChaiOrder = {
//   type: string;
//   sugar: number;
//   strong: boolean;
// };

// function makeChai(order: ChaiOrder) {
//   console.log("Making chai:", order);
// }

// function serveChai(order: ChaiOrder) {
//   console.log("Serving chai:", order);
// }

// const order: ChaiOrder = {
//   type: "Masala Chai",
//   sugar: 2,
//   strong: true,
// };

// makeChai(order);
// serveChai(order);

// We can write with type or interface it works with both but -----------------------------------------------------------------------------------------------------------------
// type TeaRecipe = {
//   water: number;
//   milk: number;
// };

// interface TeaRecipe {
//   water: number;
//   milk: number;
// };


// class MasalaChai implements TeaRecipe {
//   water: number = 100;
//   milk: number = 50;
// }

// const chai = new MasalaChai();

// console.log(chai);

// we cannot write it with type only with interface----------------------------------------------------------------------------------------------------------------

// interface CupSize {
//   size: "small" | "large";
// }

// class Chai implements CupSize {
//   size: "small" | "large" = "large";
// }

// const chai = new Chai();

// console.log(chai.size);

//------------------------------------------------------------------------

// type Response = { ok: true } | { ok: false };

// class MyRes implements Response {
//   ok: boolean = true;
// }

// This code produces an error

// The above code is invalid in TypeScript.

// Error:

// A class can only implement an object type or intersection of object types
// with statically known members.

// --------------------------------------------------------------------------

// type TeaType = "masala" | "ginger" | "lemon";

// function orderChai(t: TeaType) {
//   console.log(t);
// } 

//-------------Intersection---------------------------------
// type BaseChai = {
//   teaLeaves: number;
// };

// type Extra = {
//   masala: number;
// };

// type MasalaChai = BaseChai & Extra;

// const cup: MasalaChai = {
//   teaLeaves: 2,
//   masala: 1,
// };

// console.log(cup);

// -----------------------Optional value------------------------

// type User = {
//   username: string;
//   bio?: string;
// };

// const u1: User = {
//   username: "Hitesh",
// };

// const u2: User = {
//   username: "Hitesh",
//   bio: "hitesh.ai",
// };

// ----------------------ReadOnly Properties--------------------

// type Config = {
//   readonly appName: string;
//   version: number;
// };

// const cfg: Config = {
//   appName: "Masterji",
//   version: 1,
// };

// cfg.appName = "ChaiCode";  //Cannot assign to 'appName' because it is a read-only property.