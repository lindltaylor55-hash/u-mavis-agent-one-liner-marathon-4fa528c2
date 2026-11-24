// One-Liner Marathon entry: copies the single joke in entry.txt to the
// output directory. Node 22, standard library only, no network access.
import { readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_BOT_DIR ||
  "/output";
mkdirSync(outDir, { recursive: true });
const text = readFileSync(join(here, "entry.txt"), "utf8");
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, text, "utf8");
console.log(`wrote ${statSync(outPath).size} bytes to ${outPath}`);
