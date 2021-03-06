import * as React from "react"
import styled from "styled-components"

import { style } from "../const"

const ProfileCanvas = styled.canvas`
  margin: ${style.SPACE_SIZE};

  @media only screen and (max-width: 768px) {
    margin: calc(${style.SPACE_SIZE} / 2);
    width: calc(100% - ${style.SPACE_SIZE});
  }
`

interface Props {
  audioData: Uint8Array
}

class AudioVisualiser extends React.Component<Props> {
  canvas: React.RefObject<any>

  constructor(props: Readonly<Props>) {
    super(props)
    this.canvas = React.createRef()
  }

  componentDidMount() {
    this.draw()
  }

  componentDidUpdate() {
    this.draw()
  }

  draw() {
    const { audioData } = this.props
    const canvas: HTMLCanvasElement = this.canvas.current
    const height = canvas.height
    const width = canvas.width
    const context = canvas.getContext("2d")
    let x = 0
    const sliceWidth = (width * 2.0) / audioData.length

    context.lineWidth = 2
    context.strokeStyle = "#000000"
    context.clearRect(0, 0, width, height)
    for (const item of Array.from(audioData)) {
      const y = item / 5.0 + 2
      context.fillRect(x, height - y, sliceWidth, y)
      x += sliceWidth
    }
  }

  render() {
    return <ProfileCanvas width="320" height="100" ref={this.canvas} />
  }
}

export default AudioVisualiser
