import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import globals from "rollup-plugin-node-globals";
import { terser } from "rollup-plugin-terser";
import html from "@rollup/plugin-html";

export default {
  input: ["./src/index.tsx"],
  output: {
    dir: "dist",
    format: "iife"
  },
  plugins: [
    typescript(),
    resolve({
      preferBuiltins: true,
      exportConditions: ["solid"],
      extensions: [".ts", ".tsx"]
    }),
    commonjs(),
    globals(),
    babel({ babelHelpers: "bundled", extensions: [".ts", ".tsx"] }),
    terser(),
    html({
      attributes: {
        link: {
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        }
      },
      title: "A simple enough test"
    })
  ]
};
