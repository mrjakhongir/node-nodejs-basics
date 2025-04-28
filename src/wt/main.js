// main.js
import { cpus } from "os";
import { Worker } from "worker_threads";
import { join } from "path";

const performCalculations = async () => {
  const numCPUs = cpus().length;
  const workers = [];

  for (let i = 0; i < numCPUs; i++) {
    workers.push(
      new Promise((resolve) => {
        const worker = new Worker(
          join(new URL(".", import.meta.url).pathname, "worker.js")
        );

        worker.on("message", (data) => {
          resolve(data);
        });

        worker.on("error", () => {
          resolve({ status: "error", data: null });
        });

        worker.postMessage(10 + i);
      })
    );
  }

  const settledResults = await Promise.all(workers);
  console.log(settledResults);
};

await performCalculations();
