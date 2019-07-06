import React from "react"
import Head from "./head"
import Header from "./header"

interface Props {
  children: React.ReactNode
}

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
}

const Layout = (props: Props) => (
  <div style={layoutStyle}>
    <Head />
    <Header />
    {props.children}
  </div>
)

export default Layout
