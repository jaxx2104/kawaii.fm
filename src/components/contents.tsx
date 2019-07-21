import React from "react"
import styled from "styled-components"

import { groupBy } from "../helpers/groupBy"
import { style } from "../const"
import data from "../assets/data.json"

import AudioPlayer from "./audio-player"

const ContentsWrap = styled.div`
  margin: ${style.SPACE_SIZE};
  max-width: ${style.CONTENT_SIZE};
`

const Flex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin: ${style.SPACE_SIZE};

  div {
    margin: calc(${style.SPACE_SIZE} / 2);
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
