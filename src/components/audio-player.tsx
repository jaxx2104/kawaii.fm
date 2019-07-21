import * as React from "react"
import styled from "styled-components"

import { emitter } from "../helpers/emitter"
import { style } from "../const"

interface Props {
  audio?: HTMLAudioElement
  label: string
  src?: string
}

const StyledButton = styled.div`
  background-color: ${style.DEFAULT_BUTTON_COLOR};
  border-radius: 8px;
  border: 3px solid ${style.BORDER_COLOR};
  color: ${style.TEXT_COLOR};
  cursor: pointer;
  font-size: ${style.FONT_SIZE};
  font-weight: ${style.FONT_WEIGHT};
  line-height: calc(${style.FONT_SIZE} * 2);
  text-align: center;
  min-width: 120px;
  padding: 0 ${style.SPACE_SIZE};

  :hover {
    background-color: ${style.HOVER_BUTTON_COLOR};
  }

  :active {
    background-color: ${style.ACTIVE_BUTTON_COLOR};
  }
`

const AudioPlayer = (props: Props) => {
  const { label, src } = props

  return (
    <StyledButton onClick={() => emitter.emit("play", src)}>
      {label}
    </StyledButton>
  )
}

AudioPlayer.defaultProps = {
  label: "さいせい"
}

export default AudioPlayer
