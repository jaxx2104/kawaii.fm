/* eslint-disable @typescript-eslint/no-var-requires */
const withTypescript = require("@zeit/next-typescript")

module.exports = (phase, { defaultConfig }) => {
  // console.log(defaultConfig)
  return withTypescript({
    distDir: "../dist"
  })
}
