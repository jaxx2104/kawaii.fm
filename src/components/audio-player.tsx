import * as React from "react"
import styled from "styled-components"

import { emitter } from "../helpers/emitter"
import { style } from "../const"

interface Props {
  audio?: HTMLAudioElement
  label: string
  src?: string
}

const StyledButton = styled.button`
  background-color: ${style.DEFAULT_BUTTON_COLOR};
  border-radius: 8px;
  border: 3px solid ${style.BORDER_COLOR};
  color: ${style.TEXT_COLOR};
  margin: calc(${style.SPACE_SIZE} / 2);
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

  @media only screen and (max-width: 768px) {
    width: calc(100% - ${style.SPACE_SIZE});
  }
`

const AudioPlayer = ({ label = "さいせい", src }: Props) => {
  return (
    <StyledButton
      onClick={() => {
        return emitter.emit("play", src)
      }}
    >
      {label}
    </StyledButton>
  )
}

export default AudioPlayer
