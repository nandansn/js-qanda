console.log("start");

setTimeout(() => {
  console.log("timeout done");
}, 1000);

new Promise((resolve, reject) => {
  resolve("promise done");
}).then((data) => {
  console.log(data);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise done");
  }, 2000);
}).then((data) => {
  console.log(data);
});

new Promise((resolve, reject) => {
  reject("promise not done");
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("end");
