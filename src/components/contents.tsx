import React from "react"
import styled from "styled-components"
import AudioPlayer from "./audio-player"
import { groupBy } from "../helpers/groupBy"
import data from "../assets/data.json"

const ContentsWrap = styled.div`
  margin: 24px;
  max-width: 780px;
`

const Flex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin: 24px;

  div {
    margin: 12px;
  }
`

const Contents = () => {
  const items = groupBy(data, "category")
  const keys = Object.keys(items)
  return (
    <ContentsWrap>
      {keys.map(key => {
        const players = items[key]
        return (
          <React.Fragment key={key}>
            <h2>{key}</h2>
            <Flex>
              {players.map((player, i) => (
                <AudioPlayer key={i} label={player.label} src={player.src} />
              ))}
            </Flex>
          </React.Fragment>
        )
      })}
    </ContentsWrap>
  )
}

export default Contents
