const fs = require("fs");

// 3 styles possible
// synchrone
try {
  const data = fs.readFileSync("src.txt");
  fs.writeFileSync("copy.txt", data);
  console.log("Copy Done");
} catch (err) {
  console.log(err);
}

// asynchrone basée sur des callbacks
// Callback Hell / Pyramid of doom
fs.readFile("src.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("copy.txt", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Copy Done");
      }
    });
  }
});

// asynchrone basée sur des promesses
fs.promises
  .readFile("src.txt")
  .then((data) => fs.promises.writeFile("copy.txt", data))
  .then(() => console.log("Copy Done"))
  .catch((err) => console.log(err));

// ES2017 async / await
async function copy() {
  try {
    const data = await fs.promises.readFile("src.txt");
    await fs.promises.writeFile("copy.txt", data);
    console.log("Copy Done");
  } catch (err) {
    console.log(err);
  }
}

copy();
