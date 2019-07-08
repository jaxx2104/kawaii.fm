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

const Contents = () => (
  <ContentsWrap>
    <h2>うた</h2>
    <Flex>
      <AudioPlayer label="とんとんとんとんひげじいさん" />
      <AudioPlayer label="はたらくくるま" />
      <AudioPlayer label="大きな栗の木の下で" />
      <AudioPlayer label="いとまき" />
      <AudioPlayer label="おべんとうばこのうた" />
      <AudioPlayer label="パンダうさぎコアラ" />
      <AudioPlayer label="アンパンマンたいそう" />
    </Flex>
    <h2>おはなし</h2>
    <Flex>
      <AudioPlayer label="ちがうちがうつるつる" />
    </Flex>
  </ContentsWrap>
)

export default Contents
