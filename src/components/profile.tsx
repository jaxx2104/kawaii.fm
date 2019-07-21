import * as React from "react"
import styled from "styled-components"

import { style } from "../const"
import image from "../assets/mu.jpg"

import AudioAnalyzer from "./audio-analyzer"

const ContentsWrap = styled.div`
  margin: ${style.SPACE_SIZE};
  max-width: ${style.CONTENT_SIZE};
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`

const ProfileInfo = styled.div`
  text-align: left;
  margin-left: ${style.SPACE_SIZE};
  margin-right: ${style.SPACE_SIZE};
`

const StyledImg = styled.img`
  margin: ${style.SPACE_SIZE};
  height: ${style.ICON_SIZE};
  width: ${style.ICON_SIZE};
  border-radius: 50%;
`

const Profile = () => {
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
        <AudioAnalyzer />
      </Flex>
    </ContentsWrap>
  )
}

export default Profile
