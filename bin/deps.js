const deps = [
    "@babel/runtime",
    "@hot-loader/react-dom",
    "react",
    "react-dom"
]
const devDeps = [
    "@babel/core",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
    "@babel/preset-env",
    "@babel/preset-react",
    "@pmmmwh/react-refresh-webpack-plugin",
    "babel-loader",
    "chalk",
    "css-loader",
    "file-loader",
    "html-webpack-plugin",
    "mini-css-extract-plugin",
    "optimize-css-assets-webpack-plugin",
    "open",
    "ora",
    "react-refresh",
    "style-loader",
    "terser-webpack-plugin",
    "url-loader",
    "webpack",
    "webpack-cli",
    "webpack-dev-server"
]
const tsDeps = [
    "@babel/preset-typescript",
    "@types/react",
    "@types/react-dom",
    "typescript",
    "type-fest"
]

module.exports = {
    deps,
    devDeps,
    tsDeps
}