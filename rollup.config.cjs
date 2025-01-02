/* eslint-disable @typescript-eslint/no-require-imports */
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const packageJson = require("./package.json");
const dts = require("rollup-plugin-dts").default;
const banner2 = require("rollup-plugin-banner2");

const config = [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
            }),
            postcss({
                extract: false,
                minimize: true,
            }),
            banner2(() => `"use client"\n`),
        ],
        external: ["react", "react-dom", "tailwindcss", "next"],
    },
    {
        input: "dist/types/index.d.ts",
        output: {
            file: "dist/index.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
];

module.exports = config;
