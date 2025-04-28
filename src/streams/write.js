import fs, { createWriteStream } from "fs";
import { join } from "path";

const write = async () => {
  const filePath = join("files", "fileToWrite.txt");
  const stream = createWriteStream(filePath);
  process.stdin.pipe(stream);

  console.log(
    "Please enter some text to write to the file. Press Ctrl+D to finish."
  );

  process.stdin.on("end", () => {
    console.log("Data has been written to the file.");
  });

  stream.on("error", (err) => {
    console.error(`Error writing to the file: ${err.message}`);
  });
};

await write();
