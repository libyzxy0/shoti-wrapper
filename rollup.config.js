import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    { file: "dist/index.cjs", format: "cjs" },
    { file: "dist/index.mjs", format: "es" }
  ],
  plugins: [
    resolve(),
    json(),
    commonjs({
      include: "node_modules/**",
      requireReturnsDefault: "auto" 
    }),
    typescript({ tsconfig: "./tsconfig.json" })
  ]
};
