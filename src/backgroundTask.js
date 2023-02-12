process.on("message", (msg) => console.log("msg from child", msg.toString()));

console.log(`I'am ready ${process.pid}`);
