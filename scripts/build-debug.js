#!/usr/bin/env node

console.log("=== Build Debug Information ===");
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("Environment:", process.env.NODE_ENV || "development");

// Check if Bun is available
try {
  const { execSync } = require("child_process");
  const bunVersion = execSync("bun --version", { encoding: "utf8" }).trim();
  console.log("Bun version:", bunVersion);
} catch (error) {
  console.log("Bun not available:", error.message);
}

// Check package.json
try {
  const pkg = require("../package.json");
  console.log("Package manager:", pkg.packageManager);
  console.log("Engines:", pkg.engines);
} catch (error) {
  console.log("Error reading package.json:", error.message);
}

// Check if styled-system exists
const fs = require("fs");
const path = require("path");

const styledSystemPath = path.join(__dirname, "..", "styled-system");
console.log("Styled-system exists:", fs.existsSync(styledSystemPath));

if (fs.existsSync(styledSystemPath)) {
  const files = fs.readdirSync(styledSystemPath);
  console.log("Styled-system files:", files);
}

console.log("=== End Debug Information ===");
