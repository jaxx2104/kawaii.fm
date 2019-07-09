import React from "react"
import styled from "styled-components"
import AudioPlayer from "./audio-player"

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

interface Props {
  audio: HTMLAudioElement
}

const Contents = (props: Props) => {
  const { audio } = props
  return (
    <ContentsWrap>
      <h2>うた</h2>
      <Flex>
        <AudioPlayer label="とんとんとんとんひげじいさん" audio={audio} />
        <AudioPlayer label="はたらくくるま" audio={audio} />
        <AudioPlayer label="大きな栗の木の下で" audio={audio} />
        <AudioPlayer label="いとまき" audio={audio} />
        <AudioPlayer label="おべんとうばこのうた" audio={audio} />
        <AudioPlayer label="パンダうさぎコアラ" audio={audio} />
        <AudioPlayer label="アンパンマンたいそう" audio={audio} />
      </Flex>
      <h2>おはなし</h2>
      <Flex>
        <AudioPlayer label="ちがうちがうつるつる" audio={audio} />
      </Flex>
    </ContentsWrap>
  )
}

export default Contents
