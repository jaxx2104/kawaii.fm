import React from "react"
import styled from "styled-components"

import { style } from "../const"
import image from "../assets/mu.jpg"

import AudioAnalyzer from "./audio-analyzer"

const ContentsWrap = styled.div`
  margin: ${style.SPACE_SIZE};
  max-width: ${style.CONTENT_SIZE};

  @media only screen and (max-width: 768px) {
    margin: ${style.SPACE_SIZE} calc(${style.SPACE_SIZE} / 2);
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
`

const ProfileInfo = styled.div`
  text-align: left;
  margin: ${style.SPACE_SIZE};

  @media only screen and (max-width: 768px) {
    margin: calc(${style.SPACE_SIZE} / 2);
  }
`

const StyledImg = styled.img`
  margin: calc(${style.SPACE_SIZE} / 2);
  height: ${style.ICON_SIZE};
  width: ${style.ICON_SIZE};
  border-radius: 50%;
`

const Profile = () => {
  return (
    <ContentsWrap>
      <h2>声のひと</h2>
      <Flex>
        <StyledImg src={image.src} />
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
