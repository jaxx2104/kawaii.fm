import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { modernNormalize } from "styled-modern-normalize"

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
    background-color: #ffeb3b;
    color: #333;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 900;
    font-size: 1.4rem;
  }

  h1 {
    font-size: 5.0em;
  }

  h2 {
    font-size: 1.6em;
    margin: 12px 0;
  }
`

const StyledLayout = styled.div`
  min-height: calc(100vh - 24px * 2);
  margin: 24px;
  padding: 24px;
  border: 3px solid #333;
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
