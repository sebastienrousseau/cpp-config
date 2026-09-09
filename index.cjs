const fs = require("fs");
const path = require("path");

const presets = [".clang-format",".clang-tidy","cmake-format.py"];
const defaultPreset = ".clang-format";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/cpp-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
