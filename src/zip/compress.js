import fs from "fs";
import zlib from "zlib";
import { join } from "path";

const compress = async () => {
  const inputFile = join("files", "fileToCompress.txt");
  const outputFile = join("files", "archive.gz");

  const inputStream = fs.createReadStream(inputFile);

  const outputStream = fs.createWriteStream(outputFile);

  const gzip = zlib.createGzip();

  inputStream.pipe(gzip).pipe(outputStream);

  inputStream.on("error", (err) => {
    console.error(`Error reading the file: ${err.message}`);
  });

  gzip.on("error", (err) => {
    console.error(`Error during compression: ${err.message}`);
  });

  outputStream.on("finish", () => {
    console.log(`File has been compressed and saved as ${outputFile}`);
  });
};

await compress();
