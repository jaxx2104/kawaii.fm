import * as React from "react"
import styled from "styled-components"

const ProfileCanvas = styled.canvas`
  margin-left: 48px;
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
    return <ProfileCanvas width="320" height="80" ref={this.canvas} />
  }
}

export default AudioVisualiser
