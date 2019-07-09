import React from "react"
import Layout from "../components/layout"
import Contents from "../components/contents"
import Profile from "../components/profile"

const Index = () => {
  const audio = process.browser ? new Audio("/static/assets/warp1.wav") : null

  return (
    <Layout>
      <Profile audio={audio} />
      <Contents audio={audio} />
    </Layout>
  )
}

export default Index
