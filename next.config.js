/* eslint-disable @typescript-eslint/no-var-requires */
const withTypescript = require("@zeit/next-typescript")
const withImages = require("next-images")

module.exports = (phase, { defaultConfig }) => {
  // console.log(defaultConfig)
  return withTypescript(
    withImages({
      distDir: "../dist"
    })
  )
}
