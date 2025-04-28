import { spawn } from "child_process";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
  const child = spawn(
    "node",
    [join(__dirname, "files", "script.js"), ...args],
    {
      stdio: ["pipe", "pipe", "inherit"],
    }
  );

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};

spawnChildProcess(["arg1", "arg2"]);
