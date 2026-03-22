const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src");
const outDir = path.join(__dirname, "..", "docs");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".js") && f !== "index.js");

let markdown = "# API Documentation\n\n";
markdown += `Generated at: ${new Date().toISOString()}\n\n`;

for (const file of files) {
  const content = fs.readFileSync(path.join(srcDir, file), "utf-8");
  const functions = content.match(/function\s+(\w+)\s*\(([^)]*)\)/g) || [];

  markdown += `## ${file}\n\n`;
  for (const fn of functions) {
    markdown += `- \`${fn}\`\n`;
  }
  markdown += "\n";
}

fs.writeFileSync(path.join(outDir, "api.md"), markdown);
console.log("Documentation generated at docs/api.md");
