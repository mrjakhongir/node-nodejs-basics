import { promises as fs } from "fs";

const copy = async () => {
  const srcFolder = "files";
  const destFolder = "files_copy";

  try {
    await fs.access(srcFolder);

    try {
      await fs.access(destFolder);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw new Error("FS operation failed");
      }
    }

    await fs.cp(srcFolder, destFolder, { recursive: true });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
