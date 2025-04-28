import fs from "fs";
import zlib from "zlib";
import { join } from "path";

const decompress = async () => {
  const inputFile = join("files", "archive.gz");
  const outputFile = join("files", "fileToCompress.txt");

  const inputStream = fs.createReadStream(inputFile);
  const outputStream = fs.createWriteStream(outputFile);

  const gunzip = zlib.createGunzip();

  inputStream.pipe(gunzip).pipe(outputStream);

  inputStream.on("error", (err) => {
    console.error(`Error reading the compressed file: ${err.message}`);
  });

  gunzip.on("error", (err) => {
    console.error(`Error during decompression: ${err.message}`);
  });

  outputStream.on("finish", () => {
    console.log(`File has been decompressed and saved as ${outputFile}`);
  });
};

await decompress();
