import React from "react"
import NextHead from "next/head"

import { site } from "../const"

const baseUrl = "https://kawaii.jaxx2104.info"
const favicon = `${baseUrl}/static/favicon.ico`
const thumbnail = `${baseUrl}/static/ogimage.png`

const Head = () => (
  <NextHead>
    <title>{site.title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="icon" type="image/x-icon" href={favicon} />
    <meta name="description" content={site.description}></meta>
    <meta property="og:description" content={site.description}></meta>
    <meta property="og:image" content={thumbnail}></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:title" content={site.title}></meta>
    <meta property="og:site_name" content={site.title}></meta>
    <meta name="twitter:card" content="summary"></meta>
    <meta name="twitter:site" content={site.account}></meta>
  </NextHead>
)

export default Head
