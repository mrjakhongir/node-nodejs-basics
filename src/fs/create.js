import fs from "fs";

const create = async () => {
  fs.readFile("fresh.txt", (err, data) => {
    if (data) {
      throw new Error("FS operation failed");
    } else {
      fs.writeFile("fresh.txt", "I am fresh and young", (err) => {
        if (err) console.log(err);
      });
    }
  });
};

await create();
