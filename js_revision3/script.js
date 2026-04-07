/***********************************Chapter 9 Callbacks, promises & async/await *****************************************/

// Callback function and callback error handling------------------------------------------------------------
let loadScript = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    console.log("Loaded Script with SRC: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Loaded Script with SRC: " + src);
    callback(new Error("SRC got some errors"));
  };

  document.body.appendChild(script);
};

function hello(error, src) {
  if (error) {
    console.log(error);
    return
  }
    alert("Hello World1 " + src);

}
function goodmorning(error, src) {
  alert("Good Morning: " + src);
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",
  hello,
);
