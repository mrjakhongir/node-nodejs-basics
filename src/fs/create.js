import { promises as fs } from "fs";
import { join } from "path";

const create = async () => {
  const path = join("files", "fresh.txt");
  try {
    await fs.access(path);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(path, "I am fresh and young");
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await create();
