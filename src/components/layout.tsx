import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { modernNormalize } from "styled-modern-normalize"

import { style } from "../const"

import Head from "./head"
import Header from "./header"

interface Props {
  children: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:400,900&display=swap');

  ${modernNormalize}

  html {
    -webkit-font-smoothing: antialiased;
    font-size: 62.5%;
  }

  body {
    background-color: ${style.BACKGROUND_COLOR};
    color: ${style.TEXT_COLOR};
    font-family: "M PLUS Rounded 1c", ${style.FONT_FAMILY}, sans-serif;
    font-weight: ${style.FONT_WEIGHT};
    font-size: ${style.FONT_SIZE};
  }
`

const StyledLayout = styled.div`
  min-height: calc(100vh - ${style.SPACE_SIZE} * 2);
  margin: ${style.SPACE_SIZE};
  padding: ${style.SPACE_SIZE};
  border: 3px solid ${style.BORDER_COLOR};
`

const Layout = (props: Props) => (
  <StyledLayout>
    <GlobalStyle />
    <Head />
    <Header />
    {props.children}
  </StyledLayout>
)

export default Layout
