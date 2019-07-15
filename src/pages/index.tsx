import * as React from "react"

import Layout from "../components/layout"
import Contents from "../components/contents"
import Profile from "../components/profile"

const AppContext = React.createContext(null)

const play = () => {
  console.log("play")
}

const Index = () => {
  return (
    <AppContext.Provider value={{ play }}>
      <Layout>
        <Profile />
        <Contents />
      </Layout>
    </AppContext.Provider>
  )
}

export default Index
