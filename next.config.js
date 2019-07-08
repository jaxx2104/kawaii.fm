/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require("next-images")

module.exports = (phase, { defaultConfig }) => {
  // console.log(defaultConfig)
  return withImages({
    distDir: "../dist"
  })
}
