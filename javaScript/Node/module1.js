// commonjs module----------------------------------------------------------------------
// const a = 2;
// module.exports = a

const hello = () => {
  console.log("Hello Chandan");
};

const goodMorning = (name) => {
  console.log("Good Morning " + name);
};

module.exports = { hello, goodMorning }; // same as below line
// module.export = {hello: hello, goodMorning: goodMorning}
