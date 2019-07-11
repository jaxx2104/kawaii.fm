import * as React from "react"

import Layout from "../components/layout"
import Contents from "../components/contents"
import Profile from "../components/profile"
import { useAudio } from "../helpers/useAudio"
import { AudioContext } from "../helpers/useAudioContext"

const Index = () => {
  return (
    <AudioContext.Provider value={useAudio()}>
      <Layout>
        <Profile />
        <Contents />
      </Layout>
    </AudioContext.Provider>
  )
}

export default Index
