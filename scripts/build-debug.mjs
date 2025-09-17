#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log("=== Build Debug Information ===");
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("Environment:", process.env.NODE_ENV || "development");

// Check if Bun is available
try {
  const bunVersion = execSync("bun --version", { encoding: "utf8" }).trim();
  console.log("Bun version:", bunVersion);
} catch (error) {
  console.log("Bun not available:", error.message);
}

// Check package.json
try {
  const pkg = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8"),
  );
  console.log("Package manager:", pkg.packageManager);
  console.log("Engines:", pkg.engines);
} catch (error) {
  console.log("Error reading package.json:", error.message);
}

// Check if styled-system exists
const styledSystemPath = path.join(__dirname, "..", "styled-system");
console.log("Styled-system exists:", fs.existsSync(styledSystemPath));

if (fs.existsSync(styledSystemPath)) {
  const files = fs.readdirSync(styledSystemPath);
  console.log("Styled-system files:", files);
}

console.log("=== End Debug Information ===");
