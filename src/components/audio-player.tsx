import * as React from "react"
import styled from "styled-components"

interface Props {
  audio?: HTMLAudioElement
  label: string
  src?: string
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
  const { label, src } = props

  return (
    <StyledButton onClick={true ? () => {} : () => {}}>
      {false ? "とめる" : label}
    </StyledButton>
  )
}

AudioPlayer.defaultProps = {
  label: "さいせい"
}

export default AudioPlayer
