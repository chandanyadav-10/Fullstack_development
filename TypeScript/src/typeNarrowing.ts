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
    return `Serving ${msg}`
  } else {
    return `Serving Ginger Chai ${msg}`
  }
}

console.log(serveChai("Masala Chai"));


//Example 2

let age: number | undefined = 20

if(age){
    console.log(age.toFixed(2))
}else{
    console.log("Done") 
}


function light(trafficLight: "red" | "yellow" | "green"){
    if(trafficLight === "red"){
       return "Stop";
    }
    
    if(trafficLight === "yellow"){
       return "Slow Down";
    }
    
    if(trafficLight === "green"){
        return "Go";
    }
    
}

console.log(light("red"))

