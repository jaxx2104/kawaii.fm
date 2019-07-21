import React from "react"
import NextHead from "next/head"

import { site } from "../const"

const Head = () => (
  <NextHead>
    <title>{site.title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
  </NextHead>
)

export default Head
