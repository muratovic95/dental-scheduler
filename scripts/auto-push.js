#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");

// Change to the project root directory
const projectRoot = path.resolve(__dirname, "..");
process.chdir(projectRoot);

console.log("?? Auto-pushing changes to GitHub...");

try {
  // Add all changes
  console.log("?? Adding changes...");
  execSync("git add .", { stdio: "inherit" });
  
  // Check if there are changes to commit
  const status = execSync("git status --porcelain").toString();
  
  if (!status) {
    console.log("? No changes to commit.");
    process.exit(0);
  }
  
  // Commit changes with timestamp
  const timestamp = new Date().toISOString();
  console.log("?? Committing changes...");
  execSync(`git commit -m "Auto-commit: ${timestamp}"`, { stdio: "inherit" });
  
  // Push to GitHub
  console.log("?? Pushing to GitHub...");
  execSync("git push", { stdio: "inherit" });
  
  console.log("? Successfully pushed changes to GitHub!");
} catch (error) {
  console.error("? Error:", error.message);
  process.exit(1);
}
