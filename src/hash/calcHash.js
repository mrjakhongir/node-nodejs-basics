import fs from "fs";
import { join } from "path";
import crypto from "crypto";

const calculateHash = async () => {
  const filePath = join("files", "fileToCalculateHashFor.txt");
  const hash = crypto.createHash("sha256");
  const stream = fs.createReadStream(filePath);

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    const result = hash.digest("hex");
    console.log(`SHA256 hash of the file is: ${result}`);
  });

  stream.on("error", (err) => {
    console.error(`Error reading the file: ${err.message}`);
  });
};

await calculateHash();
