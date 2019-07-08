import React from "react"
import styled from "styled-components"

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
`

const StyledImg = styled.img`
  margin: 24px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`

const Profile = () => (
  <ContentsWrap>
    <h2>声のひと</h2>
    <Flex>
      <StyledImg src={image} />
      <ProfileInfo>
        <p>２さい（いやいや期）</p>
        <p>好きのもの：どうぶつ</p>
        <p>嫌いなもの：おに</p>
      </ProfileInfo>
    </Flex>
  </ContentsWrap>
)

export default Profile
