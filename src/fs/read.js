import { promises as fs } from "fs";
import { join } from "path";

const read = async () => {
  const path = join("files", "fileToRead.txt");

  try {
    await fs.access(path);
    const content = await fs.readFile(path, "utf-8");
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
