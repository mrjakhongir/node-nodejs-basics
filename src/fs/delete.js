import { promises as fs } from "fs";
import { join } from "path";

const remove = async () => {
  const path = join("files", "fileToRemove.txt");

  try {
    await fs.access(path);

    await fs.unlink(path);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
