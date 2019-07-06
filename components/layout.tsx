import React from "react"
import styled from "styled-components"

import Head from "./head"
import Header from "./header"

interface Props {
  children: React.ReactNode
}

const StyledLayout = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`

const Layout = (props: Props) => (
  <StyledLayout>
    <Head />
    <Header />
    {props.children}
  </StyledLayout>
)

export default Layout
