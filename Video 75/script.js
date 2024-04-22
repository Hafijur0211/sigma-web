console.log("Hafijur is Hacker");
console.log("Rahman is Hecker");

setTimeout(() => {
    console.log("I am inside settimeout");
}, 2000);

console.log("The End");

// Callback function

const fn = () => {
    console.log("Nothing");
};

const callback = (arg, fn) => {
    console.log(arg);
    fn();
};

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Hafijur", fn);
    document.head.append(sc);
};

loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
    callback
);