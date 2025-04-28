import { promises as fs } from "fs";

const list = async () => {
  const srcFolder = "files";

  try {
    await fs.access(srcFolder);
    const list = await fs.readdir(srcFolder);
    console.log(list);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
