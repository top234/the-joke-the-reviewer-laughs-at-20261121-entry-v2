import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// Gate: 1-280 Unicode code points, single line, not only whitespace.
const JOKE =
  "I asked my agent to clean up the codebase. It deleted 40,000 lines, 3 services, and my job description.";

const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 code points, got ${codePoints}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Round-trip check: what landed on disk must be exactly the joke.
if (readFileSync("/output/entry.txt", "utf8") !== JOKE) {
  throw new Error("entry.txt on disk does not match the joke");
}
