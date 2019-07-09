import React from "react"
import styled from "styled-components"

import AudioAnalyzer from "./audio-analyzer"
import image from "../assets/mu.jpg"

const ContentsWrap = styled.div`
  margin: 24px;
  max-width: 780px;
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`

const ProfileInfo = styled.div`
  text-align: left;
  margin-left: 24px;
  margin-right: 24px;
`

const StyledImg = styled.img`
  margin: 24px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`

interface Props {
  audio: HTMLAudioElement
}

const Profile = (props: Props) => {
  const { audio } = props
  return (
    <ContentsWrap>
      <h2>声のひと</h2>
      <Flex>
        <StyledImg src={image} />
        <ProfileInfo>
          <p>２さい（いやいや期）</p>
          <p>好きのもの：どうぶつ</p>
          <p>嫌いなもの：おに</p>
        </ProfileInfo>
        <AudioAnalyzer audio={audio} />
      </Flex>
    </ContentsWrap>
  )
}

export default Profile
