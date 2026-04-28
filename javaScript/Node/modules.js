// commonjs module----------------------------------------------------------------------

// const b = require("./module1")
// console.log(typeof b)

// const hello = require("./module1") // hello contains obj

// hello.hello()
// hello.goodMorning("Chandan")
// hello.goodMorning("Fandan")
// hello.goodMorning("Handan")
// hello.goodMorning("Landon")
// hello.goodMorning("Chamfan")

// const {hello, goodMorning} = require("./module1") // using destructuring

// hello()
// goodMorning("Chandan")
// goodMorning("Fandan")
// goodMorning("Handan")
// goodMorning("Landon")
// goodMorning("Chamfan")

// ES6 Module----------------------------------------------------------------------

import Chandan, {hello, goodMorning} from "./module2.js";

hello()
goodMorning("Chandan")
goodMorning("Fandan")
goodMorning("Handan")
goodMorning("Landon")
goodMorning("Chamfan")
Chandan()
