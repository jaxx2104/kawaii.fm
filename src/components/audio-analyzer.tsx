import * as React from "react"
import { Howl, Howler } from "howler"

import { emitter } from "../helpers/emitter"

import AudioVisualiser from "./audio-visualiser"

const defaultAudioData = new Uint8Array(32)

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface State {
  audioData: Uint8Array
}

class AudioAnalyser extends React.Component<Props, State> {
  analyser: AnalyserNode
  dataArray: Uint8Array
  drawId: number
  sound: Howl

  state = {
    audioData: defaultAudioData
  }

  constructor(props: Readonly<Props>) {
    super(props)
    this.drawAudioVisualiser = this.drawAudioVisualiser.bind(this)
  }

  componentDidMount() {
    emitter.addListener("play", (src: string) => {
      this.disconnect()
      this.connect(src)
    })
  }

  componentWillUnmount() {
    this.disconnect()
    emitter.removeAllListeners("play")
  }

  drawAudioVisualiser() {
    this.drawId = requestAnimationFrame(this.drawAudioVisualiser)
    this.analyser.getByteFrequencyData(this.dataArray)
    this.setState({ audioData: this.dataArray })
  }

  resetAudioVisualiser() {
    cancelAnimationFrame(this.drawId)
    this.setState({ audioData: defaultAudioData })
  }

  connect(src: string) {
    if (!src) return
    this.sound = new Howl({
      src,
      onend: () => {
        this.resetAudioVisualiser()
      }
    })
    const context = Howler.ctx
    this.analyser = context.createAnalyser()
    this.analyser.fftSize = 64
    Howler.masterGain.connect(this.analyser)
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)
    this.analyser.connect(context.destination)
    this.drawAudioVisualiser()
    this.sound.play()
  }

  disconnect() {
    if (!this.sound) return
    this.sound.stop()
    this.resetAudioVisualiser()
    this.analyser.disconnect()
  }

  render() {
    return <AudioVisualiser audioData={this.state.audioData} />
  }
}

export default AudioAnalyser
