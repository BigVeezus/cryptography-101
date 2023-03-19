const { createHmac } = require("crypto");

const password = "super-secret!";
const message = "🎃 hello jack";

const hmac = createHmac("sha256", password).update(message).digest("hex");

console.log(hmac);

const password2 = "super-secret!";
const hmac2 = createHmac("sha256", password2).update(message).digest("hex");

console.log(hmac2);
