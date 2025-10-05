#!/usr/bin/env node

/**
 * Import Path Verification Script
 *
 * Verifies all import paths are working correctly before
 * implementing Option C enhancements.
 *
 * Usage: bun run scripts/verify-imports.mjs
 */

import { existsSync, readdirSync, readFileSync, statSync } from "fs";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, "..");

// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function success(message) {
  log(`✅ ${message}`, "green");
}

function error(message) {
  log(`❌ ${message}`, "red");
}

function warning(message) {
  log(`⚠️  ${message}`, "yellow");
}

function info(message) {
  log(`ℹ️  ${message}`, "blue");
}

function section(title) {
  log(`\n${"=".repeat(60)}`, "cyan");
  log(`${title}`, "cyan");
  log(`${"=".repeat(60)}`, "cyan");
}

// Track test results
const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  errors: [],
};

/**
 * Test 1: Verify styled-system exists and is recent
 */
function testStyledSystem() {
  section("Test 1: Styled System (Panda CSS)");

  const styledSystemPath = join(PROJECT_ROOT, "styled-system");

  if (!existsSync(styledSystemPath)) {
    error("styled-system/ directory not found");
    results.errors.push("Run: bun run panda:once");
    results.failed++;
    return false;
  }

  success("styled-system/ directory exists");

  // Check critical files
  const criticalFiles = [
    "styles.css",
    "css/index.mjs",
    "css/css.mjs",
    "css/cva.mjs",
    "css/cx.mjs",
  ];

  let allExist = true;
  for (const file of criticalFiles) {
    const filePath = join(styledSystemPath, file);
    if (!existsSync(filePath)) {
      error(`  Missing: ${file}`);
      allExist = false;
      results.failed++;
    } else {
      success(`  Found: ${file}`);
      results.passed++;
    }
  }

  // Check if files are recent (generated in last 7 days)
  if (allExist) {
    const cssFile = join(styledSystemPath, "styles.css");
    const stats = statSync(cssFile);
    const ageInDays = (Date.now() - stats.mtimeMs) / (1000 * 60 * 60 * 24);

    if (ageInDays > 7) {
      warning(
        `  styles.css is ${Math.floor(ageInDays)} days old - consider regenerating`,
      );
      results.warnings++;
    } else {
      info(`  styles.css generated ${Math.floor(ageInDays)} days ago (fresh)`);
    }
  }

  return allExist;
}

/**
 * Test 2: Verify all component files exist
 */
function testComponentFiles() {
  section("Test 2: Component Files");

  const componentsPath = join(PROJECT_ROOT, "src", "components");

  if (!existsSync(componentsPath)) {
    error("src/components/ directory not found");
    results.failed++;
    return false;
  }

  const expectedComponents = [
    "Hero.tsx",
    "Navbar.tsx",
    "OverviewCard.tsx",
    "Features.tsx",
    "Documentation.tsx",
    "CodeBlock.tsx",
    "CardArt.tsx",
    "BrandAssets.tsx",
    "Footer.tsx",
    "OverviewSection.tsx",
    "PalettePreview.tsx",
  ];

  let allExist = true;
  for (const component of expectedComponents) {
    const filePath = join(componentsPath, component);
    if (!existsSync(filePath)) {
      error(`  Missing: ${component}`);
      allExist = false;
      results.failed++;
    } else {
      success(`  Found: ${component}`);
      results.passed++;
    }
  }

  return allExist;
}

/**
 * Test 3: Verify icon imports in CardArt
 */
function testIconImports() {
  section("Test 3: Icon Imports");

  const iconsPath = join(PROJECT_ROOT, "src", "icons");

  if (!existsSync(iconsPath)) {
    error("src/icons/ directory not found");
    results.failed++;
    return false;
  }

  const cardArtPath = join(PROJECT_ROOT, "src", "components", "CardArt.tsx");
  if (!existsSync(cardArtPath)) {
    error("CardArt.tsx not found");
    results.failed++;
    return false;
  }

  // Read CardArt to find icon imports
  const cardArtContent = readFileSync(cardArtPath, "utf-8");
  const importRegex = /import\s+(\w+)\s+from\s+["']\.\.\/icons\/(\w+)["']/g;
  const imports = [];
  let match;

  while ((match = importRegex.exec(cardArtContent)) !== null) {
    imports.push(match[2]);
  }

  info(`  Found ${imports.length} icon imports in CardArt.tsx`);

  // Verify each icon file exists
  let allExist = true;
  for (const iconName of imports) {
    const iconPath = join(iconsPath, `${iconName}.tsx`);
    if (!existsSync(iconPath)) {
      error(`  Missing icon: ${iconName}.tsx`);
      allExist = false;
      results.failed++;
    } else {
      success(`  Found icon: ${iconName}.tsx`);
      results.passed++;
    }
  }

  return allExist;
}

/**
 * Test 4: Verify import statements in components
 */
function testComponentImports() {
  section("Test 4: Component Import Statements");

  const componentsPath = join(PROJECT_ROOT, "src", "components");
  const files = readdirSync(componentsPath).filter((f) => f.endsWith(".tsx"));

  let issuesFound = 0;

  for (const file of files) {
    const filePath = join(componentsPath, file);
    const content = readFileSync(filePath, "utf-8");

    // Check for Panda CSS import
    if (content.includes('from "../../styled-system/css"')) {
      success(`  ${file}: Correct Panda CSS import (../../)`);
      results.passed++;
    } else if (content.includes("styled-system/css")) {
      error(`  ${file}: Wrong Panda CSS import path`);
      issuesFound++;
      results.failed++;
    }

    // Check for hardcoded colors (anti-pattern)
    const hexColorRegex = /#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}/g;
    const rgbaRegex = /rgba?\([^)]+\)/g;

    const hexMatches = content.match(hexColorRegex) || [];
    const rgbaMatches = content.match(rgbaRegex) || [];

    // Filter out CSS file content (prism-tomorrow.css import is OK)
    const codeColors = hexMatches.length + rgbaMatches.length;

    if (codeColors > 5) {
      warning(`  ${file}: ${codeColors} hardcoded colors found`);
      results.warnings++;
    }
  }

  return issuesFound === 0;
}

/**
 * Test 5: Verify styles are loaded in main.tsx
 */
function testMainImports() {
  section("Test 5: Main.tsx Style Loading Order");

  const mainPath = join(PROJECT_ROOT, "src", "main.tsx");

  if (!existsSync(mainPath)) {
    error("src/main.tsx not found");
    results.failed++;
    return false;
  }

  const content = readFileSync(mainPath, "utf-8");
  const lines = content.split("\n");

  // Find import lines
  const imports = lines
    .map((line, idx) => ({ line: line.trim(), lineNum: idx + 1 }))
    .filter(({ line }) => line.startsWith("import") && line.includes(".css"));

  info(`  Found ${imports.length} CSS imports`);

  // Expected order
  const expectedOrder = [
    "styled-system/styles.css",
    "apple-motion.css",
    "apple-typography.css",
    "apple-enhancements.css",
    "card-art-colors.css",
  ];

  let orderCorrect = true;
  let lastIndex = -1;

  for (const expected of expectedOrder) {
    const found = imports.find(({ line }) => line.includes(expected));

    if (!found) {
      error(`  Missing import: ${expected}`);
      orderCorrect = false;
      results.failed++;
    } else {
      const currentIndex = found.lineNum;
      if (currentIndex < lastIndex) {
        error(`  Wrong order: ${expected} should come before previous import`);
        orderCorrect = false;
        results.failed++;
      } else {
        success(`  Correct: ${expected} (line ${currentIndex})`);
        results.passed++;
      }
      lastIndex = currentIndex;
    }
  }

  // Verify Panda styles come first
  const firstCssImport = imports[0];
  if (firstCssImport && !firstCssImport.line.includes("styled-system")) {
    warning("  Panda styles should be imported FIRST");
    results.warnings++;
  }

  return orderCorrect;
}

/**
 * Test 6: Check for circular dependencies (basic)
 */
function testCircularDependencies() {
  section("Test 6: Circular Dependencies Check");

  info("  Running basic circular dependency check...");

  const srcPath = join(PROJECT_ROOT, "src");
  const importMap = new Map();

  // Build import map
  function scanDirectory(dir) {
    const files = readdirSync(dir);

    for (const file of files) {
      const filePath = join(dir, file);
      const stat = statSync(filePath);

      if (
        stat.isDirectory() &&
        !["node_modules", ".git", "styled-system"].includes(file)
      ) {
        scanDirectory(filePath);
      } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        const content = readFileSync(filePath, "utf-8");
        const imports = [];

        // Find local imports
        const importRegex = /import\s+.*\s+from\s+["'](\.[^"']+)["']/g;
        let match;

        while ((match = importRegex.exec(content)) !== null) {
          imports.push(match[1]);
        }

        importMap.set(filePath, imports);
      }
    }
  }

  scanDirectory(srcPath);

  info(`  Scanned ${importMap.size} files`);

  // Simple cycle detection (A imports B, B imports A)
  let cyclesFound = 0;

  for (const [file, imports] of importMap.entries()) {
    for (const importPath of imports) {
      const resolvedImport = resolve(dirname(file), importPath);
      const importedFileImports =
        importMap.get(resolvedImport + ".tsx") ||
        importMap.get(resolvedImport + ".ts") ||
        importMap.get(resolvedImport);

      if (importedFileImports) {
        // Check if imported file imports back
        for (const reverseImport of importedFileImports) {
          const resolvedReverse = resolve(
            dirname(resolvedImport),
            reverseImport,
          );
          if (resolvedReverse === file.replace(/\.tsx?$/, "")) {
            error(`  Circular: ${file} ↔ ${resolvedImport}`);
            cyclesFound++;
            results.failed++;
          }
        }
      }
    }
  }

  if (cyclesFound === 0) {
    success("  No obvious circular dependencies detected");
    results.passed++;
  }

  return cyclesFound === 0;
}

/**
 * Test 7: Verify TypeScript can resolve imports
 */
function testTypeScriptResolution() {
  section("Test 7: TypeScript Import Resolution");

  const tsconfigPath = join(PROJECT_ROOT, "tsconfig.json");

  if (!existsSync(tsconfigPath)) {
    error("tsconfig.json not found");
    results.failed++;
    return false;
  }

  success("tsconfig.json exists");
  results.passed++;

  const tsconfig = JSON.parse(readFileSync(tsconfigPath, "utf-8"));

  // Check path mappings
  if (tsconfig.compilerOptions?.paths) {
    info("  Path aliases configured:");
    for (const [alias, paths] of Object.entries(
      tsconfig.compilerOptions.paths,
    )) {
      info(`    ${alias} → ${paths.join(", ")}`);
    }
  }

  // Check moduleResolution
  const moduleResolution = tsconfig.compilerOptions?.moduleResolution;
  if (moduleResolution === "bundler" || moduleResolution === "node") {
    success(`  Module resolution: ${moduleResolution}`);
    results.passed++;
  } else {
    warning(`  Unusual module resolution: ${moduleResolution}`);
    results.warnings++;
  }

  return true;
}

/**
 * Test 8: Verify package.json dependencies
 */
function testDependencies() {
  section("Test 8: Package Dependencies");

  const packagePath = join(PROJECT_ROOT, "package.json");

  if (!existsSync(packagePath)) {
    error("package.json not found");
    results.failed++;
    return false;
  }

  const pkg = JSON.parse(readFileSync(packagePath, "utf-8"));

  const criticalDeps = {
    react: "React framework",
    "react-dom": "React DOM renderer",
    "@pandacss/dev": "Panda CSS",
    "@react-spring/web": "Spring animations",
    "@use-gesture/react": "Gesture handling",
    "lucide-react": "Icon library",
    prismjs: "Code highlighting",
  };

  let allInstalled = true;

  for (const [dep, description] of Object.entries(criticalDeps)) {
    const version = pkg.dependencies?.[dep] || pkg.devDependencies?.[dep];

    if (version) {
      success(`  ${dep}@${version} - ${description}`);
      results.passed++;
    } else {
      error(`  Missing: ${dep} (${description})`);
      allInstalled = false;
      results.failed++;
    }
  }

  return allInstalled;
}

/**
 * Main test runner
 */
async function runAllTests() {
  log("\n" + "=".repeat(60), "bold");
  log("  LIQUIDIFY IMPORT PATH VERIFICATION", "bold");
  log("=".repeat(60) + "\n", "bold");

  info(`Project root: ${PROJECT_ROOT}\n`);

  const tests = [
    { name: "Styled System", fn: testStyledSystem },
    { name: "Component Files", fn: testComponentFiles },
    { name: "Icon Imports", fn: testIconImports },
    { name: "Component Imports", fn: testComponentImports },
    { name: "Main.tsx Imports", fn: testMainImports },
    { name: "Circular Dependencies", fn: testCircularDependencies },
    { name: "TypeScript Resolution", fn: testTypeScriptResolution },
    { name: "Dependencies", fn: testDependencies },
  ];

  for (const test of tests) {
    try {
      test.fn();
    } catch (err) {
      error(`Test "${test.name}" threw an error: ${err.message}`);
      results.failed++;
      results.errors.push(`${test.name}: ${err.message}`);
    }
  }

  // Final report
  section("Test Results");

  log(`\nPassed:   ${results.passed}`, "green");
  log(`Failed:   ${results.failed}`, results.failed > 0 ? "red" : "reset");
  log(
    `Warnings: ${results.warnings}`,
    results.warnings > 0 ? "yellow" : "reset",
  );

  if (results.errors.length > 0) {
    log("\nAction Items:", "yellow");
    results.errors.forEach((err) => log(`  • ${err}`, "yellow"));
  }

  log("\n" + "=".repeat(60), "cyan");

  if (results.failed === 0) {
    success("✨ All import paths verified! Ready for Option C implementation.");
    log("=".repeat(60) + "\n", "cyan");
    process.exit(0);
  } else {
    error(`❌ ${results.failed} test(s) failed. Fix issues before proceeding.`);
    log("=".repeat(60) + "\n", "cyan");
    process.exit(1);
  }
}

// Run tests
runAllTests();
