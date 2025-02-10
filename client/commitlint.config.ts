// commitlint.config.ts
import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // A new feature
        "fix", // A bug fix
        "docs", // Documentation changes
        "style", // Formatting, missing semi-colons, etc
        "refactor", // Code restructuring, no functional changes
        "perf", // Performance improvements
        "test", // Adding or updating tests
        "build", // Changes affecting the build system or dependencies
        "ci", // Changes to CI configuration files and scripts
        "chore", // Maintenance tasks, such as package updates
        "revert", // Reverting a previous commit
      ],
    ],
    "subject-case": [2, "always", ["sentence-case", "start-case", "lower-case"]],
    "header-max-length": [2, "always", 72], // Enforce a commit header length
  },
};

export default config;
