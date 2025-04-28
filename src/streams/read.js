import fs from "fs";
import { join } from "path";

const read = async () => {
  const filePath = join("files", "fileToRead.txt");
  const stream = fs.createReadStream(filePath);

  stream.pipe(process.stdout);

  stream.on("error", () => {
    console.error(`Error reading the file: ${err.message}`);
  });
};

await read();
