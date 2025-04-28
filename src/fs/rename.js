import { promises as fs } from "fs";
import { join } from "path";

const rename = async () => {
  const oldPath = join("files", "wrongFilename.txt");
  const newPath = join("files", "properFilename.md");

  try {
    await fs.access(oldPath);

    try {
      await fs.access(newPath);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw new Error("FS operation failed");
      }
    }

    await fs.rename(oldPath, newPath);
  } catch (err) {
    console.log(err);
    throw new Error("FS operation failed");
  }
};

await rename();
