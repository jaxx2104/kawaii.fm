import React, { useRef, useEffect } from "react"
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

const AudioVisualizer: React.FC<Props> = ({ audioData }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const height = canvas.height
    const width = canvas.width
    let x = 0
    const sliceWidth = (width * 2.0) / audioData.length

    context.lineWidth = 2
    context.strokeStyle = "#000000"
    context.clearRect(0, 0, width, height)

    audioData.forEach((item) => {
      const y = item / 5.0 + 2
      context.fillRect(x, height - y, sliceWidth, y)
      x += sliceWidth
    })
  }

  useEffect(() => {
    draw()
  }, [audioData])

  return <ProfileCanvas width="320" height="100" ref={canvasRef} />
}

export default AudioVisualizer
