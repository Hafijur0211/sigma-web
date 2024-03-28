let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed, Retrying...",
    "Connecting to server 2...",
    "Connected Successfully...",
    "Username hafijur098...",
    "Trying Brute force...",
    "200k password tried...",
    "Match not found...",
    "Trying Brute force...",
    "Another 200k password tried...",
    "Match found...",
    "Accessing account...",
    "Hack Successfully...",
];

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    });
};

const showHack = async (message) => {
    await sleep(2);
    // console.log(message);
    text.innerHTML = text.innerHTML + message + "<br>";
};

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i]);
    }
})();
