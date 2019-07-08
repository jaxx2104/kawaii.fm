import React from "react"
import useAudio from "../helpers/useAudio"
import styled from "styled-components"

interface Props {
  label: string
}

const StyledButton = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 0.15em solid #333;
  color: #333;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 2.4rem;
  text-align: center;
  min-width: 120px;
  padding: 0 20px;

  :hover {
    background-color: #eceff1;
  }

  :active {
    background-color: #ccc;
  }
`

const AudioPlayer = (props: Props) => {
  const { label } = props
  const audio = useAudio("/static/assets/warp1.wav")
  const { playing, play, pause } = audio

  return (
    <React.Fragment>
      <StyledButton onClick={playing ? pause : play}>
        {playing ? "とめる" : label}
      </StyledButton>
    </React.Fragment>
  )
}

AudioPlayer.defaultProps = {
  label: "さいせい"
}

export default AudioPlayer
